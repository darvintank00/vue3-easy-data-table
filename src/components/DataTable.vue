<template>
  <div ref="dataTable" class="vue3-easy-data-table" :class="[tableClassName]">
    <div
      ref="tableBody"
      class="vue3-easy-data-table__main"
      :class="{
        'fixed-header': fixedHeader,
        'fixed-height': tableHeight,
        'show-shadow': showShadow,
        'table-fixed': fixedHeaders.length,
        hoverable: !noHover,
        'border-cell': borderCell
      }"
    >
      <table :id="tableNodeId">
        <!-- <colgroup>
          <col
            v-for="(header, index) in headersForRender"
            :key="index"
            :style="getColStyle(header)"
          />
        </colgroup> -->
        <!-- {{ headersForRender }} -->
        <slot
          v-if="slots['customize-headers']"
          name="customize-headers"
          :headersForRender="headersForRender"
        />
        <thead
          v-else-if="headersForRender.length && !hideHeader"
          class="vue3-easy-data-table__header"
          :class="[headerClassName]"
        >
          <!-- :class="[{
                sortable: header.sortable,
                'none': header.sortable && header.sortType === 'none',
                'desc': header.sortable && header.sortType === 'desc',
                'asc': header.sortable && header.sortType === 'asc',
                'shadow': header.value === lastFixedColumn,
                'ignore-drag' : header.text === 'checkbox',
              // eslint-disable-next-line max-len
              }, typeof headerItemClassName === 'string' ? headerItemClassName : headerItemClassName(header as Header, index + 1)]" -->
          <!-- <Container
            @drop="onDrop"
            tag="tr"
            orientation="horizontal"
            behaviour="move"
            drag-class="dragClass"
            @drag-start="dragStart"
            :drop-placeholder="true"
            @drop-ready="onDropReady"
            > -->
          <!-- :get-ghost-parent="getGhostParent" -->
          <!-- <Draggable
              v-for="(header, index) in headersForRender"
              :key="index"
              @click.stop="
                header.sortable && header.sortType
                  ? updateSortField(header.value, header.sortType)
                  : null
              "
              :tag="{ value: 'th', props: { class: headerClass(header, index) } }"
              :style="[getColStyle(header), getFixedDistance(header.value)]"
            > -->
          <!-- {{ [getColStyle(header), getFixedDistance(header.value)] }} -->
          <!-- <tr> -->
          <draggable
            v-model="headersForRender"
            item-key="index"
            tag="tr"
            filter=".ignore-drag"
            :disabled="!draggableColumns"
            
          >
            <!-- <th
                v-for="(header, index) in headersForRender"
              :key="index"
              :class="[{
                sortable: header.sortable,
                'none': header.sortable && header.sortType === 'none',
                'desc': header.sortable && header.sortType === 'desc',
                'asc': header.sortable && header.sortType === 'asc',
                'shadow': header.value === lastFixedColumn,
                'ignore-drag' : header.text === 'checkbox',
                // eslint-disable-next-line max-len
              }, typeof headerItemClassName === 'string' ? headerItemClassName : headerItemClassName(header as Header, index + 1)]"
              :style="[getColStyle(header), getFixedDistance(header.value)]"
              @click.stop="
                header.sortable && header.sortType
                ? updateSortField(header.value, header.sortType)
                : null
              "
            > -->
            <template #item="{ element, index }">
              <th
                :class="[{
                sortable: element.sortable,
                'none': element.sortable && element.sortType === 'none',
                'desc': element.sortable && element.sortType === 'desc',
                'asc': element.sortable && element.sortType === 'asc',
                'shadow': element.value === lastFixedColumn,
                'ignore-drag' : element.text === 'checkbox',
                // eslint-disable-next-line max-len
              }, typeof headerItemClassName === 'string' ? headerItemClassName : headerItemClassName(element as Header, index + 1)]"
                :style="[getColStyle(element), getFixedDistance(element.value)]"
                @click.stop="
                  element.sortable && element.sortType
                    ? updateSortField(element.value, element.sortType)
                    : null
                "
              >
                <slot name="handle"> </slot>
                <MultipleSelectCheckBox
                  v-if="element.text === 'checkbox'"
                  :key="multipleSelectStatus"
                  :status="multipleSelectStatus"
                  @change="toggleSelectAll"
                />
                <span v-else class="header" :class="`direction-${headerTextDirection}`">
                  <slot
                    v-if="slots[`header-${element.value}`]"
                    :name="`header-${element.value}`"
                    v-bind="element"
                  />
                  <slot
                    v-else-if="slots[`header-${element.value.toLowerCase()}`]"
                    :name="`header-${element.value.toLowerCase()}`"
                    v-bind="element"
                  />
                  <slot v-else-if="slots['header']" name="header" v-bind="element" />
                  <span v-else class="header-text">
                    {{ element.text }}
                  </span>
                  <i
                    v-if="element.sortable"
                    :key="element.sortType ? element.sortType : 'none'"
                    class="sortType-icon"
                    :class="{ desc: element.sortType === 'desc' }"
                  ></i>
                  <span
                    v-if="multiSort && isMultiSorting(element.value)"
                    class="multi-sort__number"
                  >
                    {{ getMultiSortNumber(element.value) }}
                  </span>
                </span>
              </th>
            </template>
            <!-- </th> -->
          </draggable>
          <!-- </tr> -->
          <!-- </Draggable>
          </Container> -->
        </thead>
        <slot v-if="ifHasBodySlot" name="body" v-bind="pageItems" />
        <tbody
          v-else-if="headerColumns.length"
          class="vue3-easy-data-table__body"
          :class="{ 'row-alternation': alternating }"
        >
          <slot
            name="body-prepend"
            v-bind="{
              items: pageItems,
              pagination: {
                isFirstPage,
                isLastPage,
                currentPaginationNumber,
                maxPaginationNumber,
                nextPage,
                prevPage
              },
              headers: headersForRender
            }"
          />
          <template v-for="(item, index) in pageItems" :key="index">
            <tr
              :class="[
                { 'even-row': (index + 1) % 2 === 0 },
                typeof bodyRowClassName === 'string'
                  ? bodyRowClassName
                  : bodyRowClassName(item, index + 1)
              ]"
              @click="
                ($event) => {
                  clickRow(item, 'single', $event)
                  clickRowToExpand &&
                    updateExpandingItemIndexList(index + prevPageEndIndex, item, $event)
                }
              "
              @dblclick="
                ($event) => {
                  clickRow(item, 'double', $event)
                }
              "
              @contextmenu="
                ($event) => {
                  contextMenuRow(item, $event)
                }
              "
            >
              <td
                v-for="(column, i) in headersForRender"
                :key="i"
                :style="[getColStyle(column), getFixedDistance(column.value, 'td')]"
                :class="[
                  {
                    shadow: column.value === lastFixedColumn,
                    'can-expand': column.value === 'expand'
                    // eslint-disable-next-line max-len
                  },
                  typeof bodyItemClassName === 'string'
                    ? bodyItemClassName
                    : bodyItemClassName(column.value, index + 1),
                  `direction-${bodyTextDirection}`
                ]"
                @click="
                  column.value === 'expand'
                    ? updateExpandingItemIndexList(index + prevPageEndIndex, item, $event)
                    : null
                "
              >
                <slot
                  v-if="slots[`item-${column.value}`]"
                  :name="`item-${column.value}`"
                  v-bind="item"
                />
                <slot
                  v-else-if="slots[`item-${column.value.toLowerCase()}`]"
                  :name="`item-${column.value.toLowerCase()}`"
                  v-bind="item"
                />
                <template v-else-if="column.value === 'expand'">
                  <i
                    class="expand-icon"
                    :class="{
                      expanding: expandingItemIndexList.includes(prevPageEndIndex + index)
                    }"
                  />
                </template>
                <template v-else-if="column.value === 'checkbox'">
                  <SingleSelectCheckBox
                    :checked="item[column.value]"
                    @change="toggleSelectItem(item)"
                  />
                </template>
                <slot
                  v-else-if="slots['item']"
                  name="item"
                  v-bind="{ column: column.value, item }"
                />
                <template v-else>
                  {{ generateColumnContent(column.value, item) }}
                </template>
              </td>
            </tr>
            <tr
              v-if="ifHasExpandSlot && expandingItemIndexList.includes(index + prevPageEndIndex)"
              :class="[
                { 'even-row': (index + 1) % 2 === 0 },
                typeof bodyExpandRowClassName === 'string'
                  ? bodyExpandRowClassName
                  : bodyExpandRowClassName(item, index + 1)
              ]"
            >
              <td :colspan="headersForRender.length" class="expand">
                <LoadingLine v-if="item.expandLoading" class="expand-loading" />
                <slot name="expand" v-bind="item" />
              </td>
            </tr>
          </template>
          <slot
            name="body-append"
            v-bind="{
              items: pageItems,
              pagination: {
                isFirstPage,
                isLastPage,
                currentPaginationNumber,
                maxPaginationNumber,
                nextPage,
                prevPage,
                updatePage
              },
              headers: headersForRender
            }"
          />
        </tbody>
      </table>
      <div v-if="loading" class="vue3-easy-data-table__loading">
        <div class="vue3-easy-data-table__loading-mask"></div>
        <div class="loading-entity">
          <slot v-if="ifHasLoadingSlot" name="loading" />
          <Loading v-else></Loading>
        </div>
      </div>

      <div v-if="!pageItems.length && !loading" class="vue3-easy-data-table__message">
        <slot name="empty-message">
          {{ emptyMessage }}
        </slot>
      </div>
    </div>
    <div v-if="!hideFooter" class="vue3-easy-data-table__footer">
      <div v-if="!hideRowsPerPage" class="pagination__rows-per-page">
        {{ rowsPerPageMessage }}
        <RowsSelector v-model="rowsPerPageRef" :rows-items="rowsItemsComputed" />
      </div>
      <div class="pagination__items-index">
        {{ `${currentPageFirstIndex}–${currentPageLastIndex}` }}
        {{ rowsOfPageSeparatorMessage }} {{ totalItemsLength }}
      </div>
      <slot
        v-if="ifHasPaginationSlot"
        name="pagination"
        v-bind="{
          isFirstPage,
          isLastPage,
          currentPaginationNumber,
          maxPaginationNumber,
          nextPage,
          prevPage
        }"
      />
      <PaginationArrows
        v-else
        :is-first-page="isFirstPage"
        :is-last-page="isLastPage"
        @click-next-page="nextPage"
        @click-prev-page="prevPage"
      >
        <template v-if="buttonsPagination" #buttonsPagination>
          <ButtonsPagination
            :current-pagination-number="currentPaginationNumber"
            :max-pagination-number="maxPaginationNumber"
            @update-page="updatePage"
          />
        </template>
      </PaginationArrows>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed, toRefs, ref, watch, provide, onMounted, PropType } from 'vue'

import { omitBy as _omitBy, isNil as _isNil, filter as _filter } from 'lodash'
// import { Container, Draggable } from 'vue3-smooth-dnd'
import draggable from 'vuedraggable'
import MultipleSelectCheckBox from './MultipleSelectCheckBox.vue'
import SingleSelectCheckBox from './SingleSelectCheckBox.vue'
import RowsSelector from './RowsSelector.vue'
import Loading from './Loading.vue'
import LoadingLine from './LoadingLine.vue'
import ButtonsPagination from './ButtonsPagination.vue'
import PaginationArrows from './PaginationArrows.vue'

import useClickRow from '../hooks/useClickRow'
import useExpandableRow from '../hooks/useExpandableRow'
import useFixedColumn from '../hooks/useFixedColumn'
import useHeaders from '../hooks/useHeaders'
import usePageItems from '../hooks/usePageItems'
import usePagination from '../hooks/usePagination'
import useRows from '../hooks/useRows'
import useServerOptions from '../hooks/useServerOptions'
import useTotalItems from '../hooks/useTotalItems'

import type { Header, Item } from '../types/main'
import type { HeaderForRender } from '../types/internal'

// eslint-disable-next-line import/extensions
import { generateColumnContent } from '../utils'
import propsWithDefault from '../propsWithDefault'

const props = defineProps({
  ...propsWithDefault,
  items: {
    type: Array as PropType<Item[]>,
    required: true
  },
  headers: {
    type: Array as PropType<Header[]>,
    required: true
  },
  draggableColumns: {
    type: Boolean,
    default: false
  }
})

const {
  tableNodeId,
  clickEventType,
  bodyTextDirection,
  checkboxColumnWidth,
  currentPage,
  expandColumnWidth,
  filterOptions,
  fixedCheckbox,
  fixedExpand,
  fixedHeader,
  fixedIndex,
  headers,
  headerTextDirection,
  indexColumnWidth,
  items,
  itemsSelected,
  loading,
  mustSort,
  multiSort,
  rowsItems,
  rowsPerPage,
  searchField,
  searchValue,
  serverItemsLength,
  serverOptions,
  showIndex,
  sortBy,
  sortType,
  tableHeight,
  tableMinHeight,
  themeColor,
  rowsOfPageSeparatorMessage,
  showIndexSymbol,
  preventContextMenuRow
} = toRefs(props)

// style related computed variables
const tableHeightPx = computed(() => (tableHeight.value ? `${tableHeight.value}px` : null))
const tableMinHeightPx = computed(() => `${tableMinHeight.value}px`)

// global style related variable
provide('themeColor', themeColor.value)

// slot
const slots = useSlots()
const ifHasPaginationSlot = computed(() => !!slots.pagination)
const ifHasLoadingSlot = computed(() => !!slots.loading)
const ifHasExpandSlot = computed(() => !!slots.expand)
const ifHasBodySlot = computed(() => !!slots.body)

// global dataTable $ref
const dataTable = ref()
const tableBody = ref()
provide('dataTable', dataTable)

// fixed-columns shadow
const showShadow = ref(false)
onMounted(() => {
  tableBody.value.addEventListener('scroll', () => {
    showShadow.value = tableBody.value.scrollLeft > 0
  })
})

const emits = defineEmits([
  'clickRow',
  'contextmenuRow',
  'selectRow',
  'deselectRow',
  'expandRow',
  'updateSort',
  'updateFilter',
  'update:itemsSelected',
  'update:serverOptions',
  'updatePageItems',
  'updateTotalItems',
  'selectAll'
])

const isMultipleSelectable = computed((): boolean => itemsSelected.value !== null)
const isServerSideMode = computed((): boolean => serverOptions.value !== null)

const {
  serverOptionsComputed,
  updateServerOptionsPage,
  updateServerOptionsSort,
  updateServerOptionsRowsPerPage
} = useServerOptions(serverOptions, multiSort, emits)

const {
  clientSortOptions,
  headerColumns,
  headersForRender,
  updateSortField,
  isMultiSorting,
  getMultiSortNumber
} = useHeaders(
  showIndexSymbol,
  checkboxColumnWidth,
  expandColumnWidth,
  fixedCheckbox,
  fixedExpand,
  fixedIndex,
  headers,
  ifHasExpandSlot,
  indexColumnWidth,
  isMultipleSelectable,
  isServerSideMode,
  mustSort,
  serverOptionsComputed,
  showIndex,
  sortBy,
  sortType,
  multiSort,
  updateServerOptionsSort,
  emits
)

const { rowsItemsComputed, rowsPerPageRef, updateRowsPerPage } = useRows(
  isServerSideMode,
  rowsItems,
  serverOptions,
  rowsPerPage
)

const { totalItems, selectItemsComputed, totalItemsLength, toggleSelectAll, toggleSelectItem } =
  useTotalItems(
    clientSortOptions,
    filterOptions,
    isServerSideMode,
    items,
    itemsSelected,
    searchField,
    searchValue,
    serverItemsLength,
    multiSort,
    emits
  )

const {
  currentPaginationNumber,
  maxPaginationNumber,
  isLastPage,
  isFirstPage,
  nextPage,
  prevPage,
  updatePage,
  updateCurrentPaginationNumber
} = usePagination(
  currentPage,
  isServerSideMode,
  loading,
  totalItemsLength,
  rowsPerPageRef,
  serverOptions,
  updateServerOptionsPage
)

const { currentPageFirstIndex, currentPageLastIndex, multipleSelectStatus, pageItems } =
  usePageItems(
    currentPaginationNumber,
    isMultipleSelectable,
    isServerSideMode,
    items,
    rowsPerPageRef,
    selectItemsComputed,
    showIndex,
    totalItems,
    totalItemsLength
  )

const prevPageEndIndex = computed(() => {
  if (currentPaginationNumber.value === 0) return 0
  return (currentPaginationNumber.value - 1) * rowsPerPageRef.value
})

const { expandingItemIndexList, updateExpandingItemIndexList, clearExpandingItemIndexList } =
  useExpandableRow(pageItems, prevPageEndIndex, emits)

const { fixedHeaders, lastFixedColumn, fixedColumnsInfos } = useFixedColumn(headersForRender)

const { clickRow } = useClickRow(clickEventType, isMultipleSelectable, showIndex, emits)

const contextMenuRow = (item: Item, $event: MouseEvent) => {
  if (preventContextMenuRow.value) $event.preventDefault()
  emits('contextmenuRow', item, $event)
}

// template style generation function
const getColStyle = (header: HeaderForRender): string | undefined => {
  const width = header.width ?? (fixedHeaders.value.length ? 100 : null)
  //  return {
  //     width: `${width}px`,
  //     minWidth: `${width}px`
  //   }
  if (width) return `width: ${width}px; min-width: ${width}px;`
  return undefined
}

const getFixedDistance = (column: string, type: 'td' | 'th' = 'th') => {
  if (!fixedHeaders.value.length) return undefined
  const columInfo = fixedColumnsInfos.value.find((info) => info.value === column)
  if (columInfo) {
    // return {
    //   left: `${columInfo.distance}px`,
    //   zIndex: `${type === 'th' ? 3 : 1}`,
    //   position: 'sticky'
    // }
    return `left: ${columInfo.distance}px;z-index: ${type === 'th' ? 3 : 1};position: sticky;`
  }
  return undefined
}

function headerClass(header: any, index: number): string {
  let classForHeader = _omitBy(
    {
      sortable: header.sortable,
      none: header.sortable && header.sortType === 'none',
      desc: header.sortable && header.sortType === 'desc',
      asc: header.sortable && header.sortType === 'asc',
      shadow: header.value === lastFixedColumn,
      'ignore-drag': header.text === 'checkbox'
      // eslint-disable-next-line max-len
    },
    _isNil
  )

  Object.keys(classForHeader).forEach((val, index) => {
    if (!classForHeader[val]) {
      delete classForHeader[val]
    }
  })

  classForHeader = [
    Object.keys(classForHeader).join(' '),
    typeof props.headerItemClassName === 'string'
      ? props.headerItemClassName
      : props.headerItemClassName(header as Header, index + 1)
  ]
    .join(' ')
    .trim()

  return classForHeader
}

function dragStart(dragResult: any) {
  console.log(dragResult)
}

function onDropReady(dropResult) {
  console.log(dropResult)

  // const { removedIndex, addedIndex, payload, element } = dropResult;
}

watch(loading, (newVal, oldVal) => {
  if (serverOptionsComputed.value) {
    // in server-side mode, turn to next page when api request finished.
    if (newVal === false && oldVal === true) {
      updateCurrentPaginationNumber(serverOptionsComputed.value.page)
      clearExpandingItemIndexList()
    }
  }
})

watch(rowsPerPageRef, (value) => {
  if (!isServerSideMode.value) {
    updatePage(1)
  } else {
    updateServerOptionsRowsPerPage(value)
  }
})

watch([searchValue, filterOptions], () => {
  if (!isServerSideMode.value) {
    updatePage(1)
  }
})

watch(
  [currentPaginationNumber, clientSortOptions, searchField, searchValue, filterOptions],
  () => {
    clearExpandingItemIndexList()
  },
  { deep: true }
)

watch(
  pageItems,
  (value) => {
    emits('updatePageItems', value)
  },
  { deep: true }
)

watch(
  totalItems,
  (value) => {
    emits('updateTotalItems', value)
  },
  { deep: true }
)

defineExpose({
  currentPageFirstIndex,
  currentPageLastIndex,
  clientItemsLength: totalItemsLength,
  maxPaginationNumber,
  currentPaginationNumber,
  isLastPage,
  isFirstPage,
  nextPage,
  prevPage,
  updatePage,
  rowsPerPageOptions: rowsItemsComputed,
  rowsPerPageActiveOption: rowsPerPageRef,
  updateRowsPerPageActiveOption: updateRowsPerPage
})
</script>

<style>
:root {
  /*table*/
  --easy-table-border: 1px solid #e0e0e0;
  --easy-table-row-border: 1px solid #e0e0e0;
  /*header-row*/
  --easy-table-header-font-size: 12px;
  --easy-table-header-height: 36px;
  --easy-table-header-font-color: #373737;
  --easy-table-header-background-color: #fff;
  /*header-item*/
  --easy-table-header-item-padding: 0px 10px;
  /*body-row*/
  --easy-table-body-row-height: 36px;
  --easy-table-body-row-font-size: 12px;

  --easy-table-body-row-font-color: #212121;
  --easy-table-body-row-background-color: #fff;

  --easy-table-body-row-hover-font-color: #212121;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-even-row-font-color: #212121;
  --easy-table-body-even-row-background-color: #fafafa;
  /*body-item*/
  --easy-table-body-item-padding: 0px 10px;
  /*footer*/
  --easy-table-footer-background-color: #fff;
  --easy-table-footer-font-color: #212121;
  --easy-table-footer-font-size: 12px;
  --easy-table-footer-padding: 0px 5px;
  --easy-table-footer-height: 36px;
  /**footer-rowsPerPage**/
  --easy-table-rows-per-page-selector-width: auto;
  --easy-table-rows-per-page-selector-option-padding: 5px;
  --easy-table-rows-per-page-selector-z-index: auto;
  /*message*/
  --easy-table-message-font-color: #212121;
  --easy-table-message-font-size: 12px;
  --easy-table-message-padding: 20px;
  /*loading-mask*/
  --easy-table-loading-mask-background-color: #fff;
  --easy-table-loading-mask-opacity: 0.5;
  /*scroll-bar*/
  --easy-table-scrollbar-track-color: #fff;
  --easy-table-scrollbar-color: #fff;
  --easy-table-scrollbar-thumb-color: #c1c1c1;
  --easy-table-scrollbar-corner-color: #fff;
  /*buttons-pagination*/
  --easy-table-buttons-pagination-border: 1px solid #e0e0e0;
}
</style>

<style lang="scss" scoped>
@import '../scss/vue3-easy-data-table.scss';

.vue3-easy-data-table__main {
  min-height: v-bind(tableMinHeightPx);
}
.vue3-easy-data-table__main.fixed-height {
  height: v-bind(tableHeightPx);
}
</style>
