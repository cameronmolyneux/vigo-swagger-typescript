/** AUTO_GENERATED Do not change this file directly, rerun the yarn vigo-swag-ts command */

export interface BooleanApiResponse {
  additionalInfo?: string[];
  data?: boolean;
  message?: string;
  succeeded?: boolean;
}

export interface CurrencyDto {
  /** - Format: int32 */
  attachmentCount?: number;
  code?: string;
  description?: string;
  /** - Format: uuid */
  id?: string;
  isDeleted?: boolean;
  /** - Format: uuid */
  siteId?: string;
  version?: string;
}

export interface CurrencyDtoApiResponse {
  additionalInfo?: string[];
  data?: CurrencyDto;
  message?: string;
  succeeded?: boolean;
}

export interface CurrencyModel {
  /** - MaxLength: 200 */
  code?: string;
  /** - MaxLength: 400 */
  description?: string;
  version?: string;
}

export interface GetCurrencyByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
}

export interface GetCurrencyQueryParams {
  filter?: string;
  /** - Format: int32 */
  pageNumber?: number;
  /** - Format: int32 */
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
  sort?: string;
}

export interface GetMasterDataByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
}

export interface GetMasterDataChildByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
}

export interface GetMasterDataChildQueryParams {
  filter?: string;
  /** - Format: int32 */
  pageNumber?: number;
  /** - Format: int32 */
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
  sort?: string;
}

export interface GetMasterDataColumnByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
}

export interface GetMasterDataColumnQueryParams {
  filter?: string;
  /** - Format: int32 */
  pageNumber?: number;
  /** - Format: int32 */
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
  sort?: string;
}

export interface GetMasterDataQueryParams {
  filter?: string;
  /** - Format: int32 */
  pageNumber?: number;
  /** - Format: int32 */
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
  sort?: string;
}

export interface GetUnitOfMeasureByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
}

export interface GetUnitOfMeasureQueryParams {
  filter?: string;
  /** - Format: int32 */
  pageNumber?: number;
  /** - Format: int32 */
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  showMaster?: boolean;
  sort?: string;
}

export interface MasterDataChildDto {
  /** - Format: int32 */
  attachmentCount?: number;
  /** - Format: uuid */
  id?: string;
  isDeleted?: boolean;
  joinColumn?: string;
  /** - Format: uuid */
  masterDataChildId?: string;
  /** - Format: uuid */
  masterDataId?: string;
  name?: string;
  /** - Format: int32 */
  sequence?: number;
  /** - Format: uuid */
  siteId?: string;
  version?: string;
}

export interface MasterDataChildDtoApiResponse {
  additionalInfo?: string[];
  data?: MasterDataChildDto;
  message?: string;
  succeeded?: boolean;
}

export interface MasterDataChildModel {
  /** - MaxLength: 200 */
  joinColumn: string;
  /** - MaxLength: 200 */
  name: string;
  /** - Format: uuid */
  masterDataChildId?: string;
  /** - Format: uuid */
  masterDataId?: string;
  /** - Format: int32 */
  sequence?: number;
  version?: string;
}

export interface MasterDataColumnDto {
  /** - Format: int32 */
  attachmentCount?: number;
  columnName?: string;
  columnType?: string;
  /** - Format: uuid */
  id?: string;
  isDefaultVisible?: boolean;
  isDeleted?: boolean;
  isEditable?: boolean;
  isLockedOnceUsed?: boolean;
  isUnique?: boolean;
  isUsedInFilter?: boolean;
  isVisible?: boolean;
  lookUp?: string;
  lookUpColumns?: string;
  /** - Format: uuid */
  masterDataId?: string;
  /** - Format: int32 */
  maxLen?: number;
  /** - Format: int32 */
  maxValue?: number;
  /** - Format: int32 */
  minLen?: number;
  /** - Format: int32 */
  minValue?: number;
  name?: string;
  /** - Format: int32 */
  sequence?: number;
  /** - Format: uuid */
  siteId?: string;
  version?: string;
}

export interface MasterDataColumnDtoApiResponse {
  additionalInfo?: string[];
  data?: MasterDataColumnDto;
  message?: string;
  succeeded?: boolean;
}

export interface MasterDataColumnModel {
  /** - MaxLength: 200 */
  columnName?: string;
  /** - MaxLength: 200 */
  columnType?: string;
  isDefaultVisible?: boolean;
  isEditable?: boolean;
  isLockedOnceUsed?: boolean;
  isUnique?: boolean;
  isUsedInFilter?: boolean;
  isVisible?: boolean;
  /** - MaxLength: 200 */
  lookUp?: string;
  /** - MaxLength: 400 */
  lookUpColumns?: string;
  /** - Format: uuid */
  masterDataId?: string;
  /** - Format: int32 */
  maxLen?: number;
  /** - Format: int32 */
  maxValue?: number;
  /** - Format: int32 */
  minLen?: number;
  /** - Format: int32 */
  minValue?: number;
  /** - MaxLength: 200 */
  name?: string;
  /** - Format: int32 */
  sequence?: number;
  version?: string;
}

export interface MasterDataDto {
  /** - Format: int32 */
  attachmentCount?: number;
  code?: string;
  description?: string;
  groupName?: string;
  /** - Format: uuid */
  id?: string;
  isDefaultVisible?: boolean;
  isDeleted?: boolean;
  isEditable?: boolean;
  isLockedOnceUsed?: boolean;
  isVisible?: boolean;
  /** - Format: uuid */
  masterDataId?: string;
  /** - Format: int32 */
  sequence?: number;
  /** - Format: uuid */
  siteId?: string;
  subGroupName?: string;
  tableName?: string;
  version?: string;
}

export interface MasterDataDtoApiResponse {
  additionalInfo?: string[];
  data?: MasterDataDto;
  message?: string;
  succeeded?: boolean;
}

export interface MasterDataModel {
  /** - MaxLength: 200 */
  code?: string;
  /** - MaxLength: 400 */
  description?: string;
  /** - MaxLength: 200 */
  groupName?: string;
  isDefaultVisible?: boolean;
  isEditable?: boolean;
  isLockedOnceUsed?: boolean;
  isVisible?: boolean;
  /** - Format: uuid */
  masterDataId?: string;
  /** - Format: int32 */
  sequence?: number;
  /** - MaxLength: 200 */
  subGroupName?: string;
  /** - MaxLength: 200 */
  tableName?: string;
  version?: string;
}

export interface ProblemDetails {
  detail?: string;
  instance?: string;
  /** - Format: int32 */
  status?: number;
  title?: string;
  type?: string;
}

export interface UnitOfMeasureDto {
  /** - Format: int32 */
  attachmentCount?: number;
  class?: string;
  code?: string;
  description?: string;
  /** - Format: uuid */
  id?: string;
  isDeleted?: boolean;
  /** - Format: uuid */
  siteId?: string;
  version?: string;
}

export interface UnitOfMeasureDtoApiResponse {
  additionalInfo?: string[];
  data?: UnitOfMeasureDto;
  message?: string;
  succeeded?: boolean;
}

export interface UnitOfMeasureModel {
  /** - MaxLength: 200 */
  class?: string;
  /** - MaxLength: 200 */
  code?: string;
  /** - MaxLength: 400 */
  description?: string;
  version?: string;
}
