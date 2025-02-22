/**
 * Operator options for lucene queries
 */
export {
  OperatorOptions,
  SqlNumberTypeRangeMap,
  DEFAULT_BB_DATASOURCE_ID,
} from "@budibase/shared-core"
export { Feature as Features } from "@budibase/types"
import { BpmCorrelationKey } from "@budibase/shared-core"
import { FieldType, BBReferenceFieldSubType } from "@budibase/types"

export const BannedSearchTypes = [
  FieldType.LINK,
  FieldType.ATTACHMENTS,
  FieldType.FORMULA,
  FieldType.JSON,
  "jsonarray",
  "queryarray",
]

// Cookie names
export const Cookies = {
  Auth: "budibase:auth",
  CurrentApp: "budibase:currentapp",
  ReturnUrl: "budibase:returnurl",
  AccountReturnUrl: "budibase:account:returnurl",
  OnboardingProcessCorrelationKey: BpmCorrelationKey.ONBOARDING,
}

// Table names
export const TableNames = {
  USERS: "ta_users",
}

export const BudibaseRoles = {
  AppUser: "appUser",
  Developer: "developer",
  Creator: "creator",
  Admin: "admin",
}

export const BudibaseRoleOptionsOld = [
  {
    label: "Developer",
    value: BudibaseRoles.Developer,
  },
]
export const BudibaseRoleOptions = [
  {
    label: "Account admin",
    value: BudibaseRoles.Admin,
    subtitle: "Has full access to all apps and settings in your account",
  },
  {
    label: "Creator",
    value: BudibaseRoles.Creator,
    subtitle: "Can create and edit apps they have access to",
  },
  {
    label: "App user",
    value: BudibaseRoles.AppUser,
    subtitle: "Can only use published apps they have access to",
  },
]

export const PlanType = {
  FREE: "free",
  TEAM: "team",
  PRO: "pro",
  BUSINESS: "business",
  ENTERPRISE: "enterprise",
  ENTERPRISE_BASIC_TRIAL: "enterprise_basic_trial",
}

/**
 * API version header attached to all requests.
 * Version changelog:
 * v1:
 *   - Coerce types for search endpoint
 */
export const ApiVersion = "1"

// Role IDs
export const Roles = {
  ADMIN: "ADMIN",
  POWER: "POWER",
  BASIC: "BASIC",
  PUBLIC: "PUBLIC",
  BUILDER: "BUILDER",
  CREATOR: "CREATOR",
}

export const Themes = [
  {
    class: "lightest",
    name: "Lightest",
  },
  {
    class: "light",
    name: "Light",
  },
  {
    class: "dark",
    name: "Dark",
  },
  {
    class: "darkest",
    name: "Darkest",
  },
  {
    class: "nord",
    name: "Nord",
    base: "darkest",
  },
  {
    class: "midnight",
    name: "Midnight",
    base: "darkest",
  },
]

export const EventPublishType = {
  ENV_VAR_UPGRADE_PANEL_OPENED: "environment_variable_upgrade_panel_opened",
}

export const ContextScopes = {
  Local: "local",
  Global: "global",
}

export const TypeIconMap = {
  [FieldType.STRING]: "Text",
  [FieldType.OPTIONS]: "Dropdown",
  [FieldType.DATETIME]: "Calendar",
  [FieldType.BARCODEQR]: "Camera",
  [FieldType.SIGNATURE_SINGLE]: "AnnotatePen",
  [FieldType.LONGFORM]: "TextAlignLeft",
  [FieldType.ARRAY]: "Duplicate",
  [FieldType.NUMBER]: "123",
  [FieldType.BOOLEAN]: "Boolean",
  [FieldType.ATTACHMENTS]: "DocumentFragmentGroup",
  [FieldType.ATTACHMENT_SINGLE]: "DocumentFragment",
  [FieldType.LINK]: "DataCorrelated",
  [FieldType.FORMULA]: "Calculator",
  [FieldType.JSON]: "Brackets",
  [FieldType.BIGINT]: "TagBold",
  [FieldType.AUTO]: "MagicWand",
  [FieldType.BB_REFERENCE]: {
    [BBReferenceFieldSubType.USER]: "UserGroup",
    [BBReferenceFieldSubType.USERS]: "UserGroup",
  },
  [FieldType.BB_REFERENCE_SINGLE]: {
    [BBReferenceFieldSubType.USER]: "User",
  },
}

export const OptionColours = [...new Array(12).keys()].map(idx => {
  return `hsla(${((idx + 1) * 222) % 360}, 90%, 75%, 0.3)`
})
