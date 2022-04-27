import { Checkbox, Select, Stepper } from "@budibase/bbui"
import DataSourceSelect from "./controls/DataSourceSelect.svelte"
import S3DataSourceSelect from "./controls/S3DataSourceSelect.svelte"
import DataProviderSelect from "./controls/DataProviderSelect.svelte"
import ButtonActionEditor from "./controls/ButtonActionEditor/ButtonActionEditor.svelte"
import TableSelect from "./controls/TableSelect.svelte"
import ColorPicker from "./controls/ColorPicker.svelte"
import { IconSelect } from "./controls/IconSelect"
import FieldSelect from "./controls/FieldSelect.svelte"
import MultiFieldSelect from "./controls/MultiFieldSelect.svelte"
import SearchFieldSelect from "./controls/SearchFieldSelect.svelte"
import SchemaSelect from "./controls/SchemaSelect.svelte"
import SectionSelect from "./controls/SectionSelect.svelte"
import FilterEditor from "./controls/FilterEditor/FilterEditor.svelte"
import URLSelect from "./controls/URLSelect.svelte"
import OptionsEditor from "./controls/OptionsEditor/OptionsEditor.svelte"
import FormFieldSelect from "./controls/FormFieldSelect.svelte"
import ValidationEditor from "./controls/ValidationEditor/ValidationEditor.svelte"
import DrawerBindableCombobox from "components/common/bindings/DrawerBindableCombobox.svelte"
import ColumnEditor from "./controls/ColumnEditor/ColumnEditor.svelte"

const componentMap = {
  text: DrawerBindableCombobox,
  select: Select,
  dataSource: DataSourceSelect,
  "dataSource/s3": S3DataSourceSelect,
  dataProvider: DataProviderSelect,
  boolean: Checkbox,
  number: Stepper,
  event: ButtonActionEditor,
  table: TableSelect,
  color: ColorPicker,
  icon: IconSelect,
  field: FieldSelect,
  multifield: MultiFieldSelect,
  searchfield: SearchFieldSelect,
  options: OptionsEditor,
  schema: SchemaSelect,
  section: SectionSelect,
  filter: FilterEditor,
  url: URLSelect,
  columns: ColumnEditor,
  "field/string": FormFieldSelect,
  "field/number": FormFieldSelect,
  "field/options": FormFieldSelect,
  "field/boolean": FormFieldSelect,
  "field/longform": FormFieldSelect,
  "field/datetime": FormFieldSelect,
  "field/attachment": FormFieldSelect,
  "field/link": FormFieldSelect,
  "field/array": FormFieldSelect,
  "field/json": FormFieldSelect,
  // Some validation types are the same as others, so not all types are
  // explicitly listed here. e.g. options uses string validation
  "validation/string": ValidationEditor,
  "validation/array": ValidationEditor,
  "validation/number": ValidationEditor,
  "validation/boolean": ValidationEditor,
  "validation/datetime": ValidationEditor,
  "validation/attachment": ValidationEditor,
  "validation/link": ValidationEditor,
}

export const getComponentForSettingType = type => {
  return componentMap[type]
}
