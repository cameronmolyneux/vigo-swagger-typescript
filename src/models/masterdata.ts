/** AUTO_GENERATED Do not change this file directly, rerun the yarn vigo-swag-ts command */

export interface BooleanApiResponse {
  additionalInfo?: string[];
  data?: boolean;
  message?: string;
  succeeded?: boolean;
}

export interface CurrencyDto {
  attachmentCount?: number;
  code?: string;
  createdBy?: string;
  createdOn?: string;
  deletedBy?: string;
  deletedOn?: string;
  description?: string;
  displayOrder?: number;
  id?: string;
  isDefault?: number;
  isDeleted?: boolean;
  partnerId?: string;
  remarks?: string;
  siteId?: string;
  updatedBy?: string;
  updatedOn?: string;
  version?: string;
}

export interface CurrencyDtoApiResponse {
  additionalInfo?: string[];
  data?: CurrencyDto;
  message?: string;
  succeeded?: boolean;
}

export interface CurrencyModel {
  code?: string;
  description?: string;
  displayOrder?: number;
  isDefault?: number;
  remarks?: string;
  version?: string;
}

export interface GetCurrencyByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
}

export interface GetCurrencyQueryParams {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  sort?: string;
}

export interface GetMasterDataByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
}

export interface GetMasterDataChildByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
}

export interface GetMasterDataChildQueryParams {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  sort?: string;
}

export interface GetMasterDataColumnByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
}

export interface GetMasterDataColumnQueryParams {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  sort?: string;
}

export interface GetMasterDataGroupByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
}

export interface GetMasterDataGroupQueryParams {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  sort?: string;
}

export interface GetMasterDataQueryParams {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  sort?: string;
}

export interface GetNominalByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
}

export interface GetNominalQueryParams {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  sort?: string;
}

export interface GetUnitOfMeasureByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
}

export interface GetUnitOfMeasureQueryParams {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  sort?: string;
}

export interface GetUnitOfMeasureTypeByidQueryParams {
  showAllSites?: boolean;
  showDeleted?: boolean;
}

export interface GetUnitOfMeasureTypeQueryParams {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  showAllSites?: boolean;
  showDeleted?: boolean;
  sort?: string;
}

export interface MasterDataChildDto {
  attachmentCount?: number;
  createdBy?: string;
  createdOn?: string;
  deletedBy?: string;
  deletedOn?: string;
  id?: string;
  isDeleted?: boolean;
  joinColumn?: string;
  joinName?: string;
  masterDataChildId?: string;
  masterDataId?: string;
  name?: string;
  partnerId?: string;
  remarks?: string;
  sequence?: number;
  siteId?: string;
  updatedBy?: string;
  updatedOn?: string;
  version?: string;
}

export interface MasterDataChildDtoApiResponse {
  additionalInfo?: string[];
  data?: MasterDataChildDto;
  message?: string;
  succeeded?: boolean;
}

export interface MasterDataChildModel {
  joinColumn: string;
  name: string;
  joinName?: string;
  masterDataChildId?: string;
  masterDataId?: string;
  remarks?: string;
  sequence?: number;
  version?: string;
}

export interface MasterDataColumnDto {
  attachmentCount?: number;
  columnName?: string;
  columnType?: string;
  createdBy?: string;
  createdOn?: string;
  deletedBy?: string;
  deletedOn?: string;
  id?: string;
  isDeleted?: boolean;
  isEditable?: boolean;
  isRequired?: boolean;
  isUnique?: boolean;
  isVisible?: boolean;
  lookUp?: string;
  lookUpColumns?: string;
  masterDataId?: string;
  maxLen?: number;
  maxValue?: number;
  minLen?: number;
  minValue?: number;
  name?: string;
  partnerId?: string;
  remarks?: string;
  sequence?: number;
  siteId?: string;
  updatedBy?: string;
  updatedOn?: string;
  version?: string;
}

export interface MasterDataColumnDtoApiResponse {
  additionalInfo?: string[];
  data?: MasterDataColumnDto;
  message?: string;
  succeeded?: boolean;
}

export interface MasterDataColumnModel {
  columnName?: string;
  columnType?: string;
  isEditable?: boolean;
  isRequired?: boolean;
  isUnique?: boolean;
  isVisible?: boolean;
  lookUp?: string;
  lookUpColumns?: string;
  masterDataId?: string;
  maxLen?: number;
  maxValue?: number;
  minLen?: number;
  minValue?: number;
  name?: string;
  remarks?: string;
  sequence?: number;
  version?: string;
}

export interface MasterDataDto {
  attachmentCount?: number;
  code?: string;
  createdBy?: string;
  createdOn?: string;
  deletedBy?: string;
  deletedOn?: string;
  description?: string;
  endPoint?: string;
  id?: string;
  isDeleted?: boolean;
  isEditable?: boolean;
  isVisible?: boolean;
  masterDataGroupId?: string;
  masterDataId?: string;
  partnerId?: string;
  remarks?: string;
  sequence?: number;
  serviceLocation?: string;
  siteId?: string;
  subGroupName?: string;
  tableName?: string;
  updatedBy?: string;
  updatedOn?: string;
  version?: string;
}

export interface MasterDataDtoApiResponse {
  additionalInfo?: string[];
  data?: MasterDataDto;
  message?: string;
  succeeded?: boolean;
}

export interface MasterDataGroupDto {
  attachmentCount?: number;
  code?: string;
  createdBy?: string;
  createdOn?: string;
  deletedBy?: string;
  deletedOn?: string;
  description?: string;
  id?: string;
  isDeleted?: boolean;
  partnerId?: string;
  remarks?: string;
  sequence?: number;
  siteId?: string;
  updatedBy?: string;
  updatedOn?: string;
  version?: string;
}

export interface MasterDataGroupDtoApiResponse {
  additionalInfo?: string[];
  data?: MasterDataGroupDto;
  message?: string;
  succeeded?: boolean;
}

export interface MasterDataGroupModel {
  code?: string;
  description?: string;
  remarks?: string;
  sequence?: number;
  version?: string;
}

export interface MasterDataModel {
  code?: string;
  description?: string;
  endPoint?: string;
  isEditable?: boolean;
  isVisible?: boolean;
  masterDataGroupId?: string;
  masterDataId?: string;
  remarks?: string;
  sequence?: number;
  serviceLocation?: string;
  subGroupName?: string;
  tableName?: string;
  version?: string;
}

export interface NominalDto {
  attachmentCount?: number;
  code?: string;
  createdBy?: string;
  createdOn?: string;
  deletedBy?: string;
  deletedOn?: string;
  description?: string;
  displayOrder?: number;
  id?: string;
  isDeleted?: boolean;
  partnerId?: string;
  remarks?: string;
  siteId?: string;
  updatedBy?: string;
  updatedOn?: string;
  version?: string;
}

export interface NominalDtoApiResponse {
  additionalInfo?: string[];
  data?: NominalDto;
  message?: string;
  succeeded?: boolean;
}

export interface NominalModel {
  code?: string;
  description?: string;
  displayOrder?: number;
  remarks?: string;
  version?: string;
}

export interface ProblemDetails {
  detail?: string;
  instance?: string;
  status?: number;
  title?: string;
  type?: string;
}

export interface UnitOfMeasureDto {
  attachmentCount?: number;
  code?: string;
  createdBy?: string;
  createdOn?: string;
  deletedBy?: string;
  deletedOn?: string;
  description?: string;
  displayOrder?: number;
  id?: string;
  isDefault?: boolean;
  isDeleted?: boolean;
  partnerId?: string;
  remarks?: string;
  siteId?: string;
  unitOfMeasureTypeId?: string;
  updatedBy?: string;
  updatedOn?: string;
  version?: string;
}

export interface UnitOfMeasureDtoApiResponse {
  additionalInfo?: string[];
  data?: UnitOfMeasureDto;
  message?: string;
  succeeded?: boolean;
}

export interface UnitOfMeasureModel {
  code?: string;
  description?: string;
  displayOrder?: number;
  isDefault?: boolean;
  remarks?: string;
  unitOfMeasureTypeId?: string;
  version?: string;
}

export interface UnitOfMeasureTypeDto {
  attachmentCount?: number;
  code?: string;
  createdBy?: string;
  createdOn?: string;
  deletedBy?: string;
  deletedOn?: string;
  description?: string;
  displayOrder?: number;
  id?: string;
  isDefault?: boolean;
  isDeleted?: boolean;
  partnerId?: string;
  remarks?: string;
  siteId?: string;
  updatedBy?: string;
  updatedOn?: string;
  version?: string;
}

export interface UnitOfMeasureTypeDtoApiResponse {
  additionalInfo?: string[];
  data?: UnitOfMeasureTypeDto;
  message?: string;
  succeeded?: boolean;
}

export interface UnitOfMeasureTypeModel {
  code?: string;
  description?: string;
  displayOrder?: number;
  isDefault?: boolean;
  remarks?: string;
  version?: string;
}
