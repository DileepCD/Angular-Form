import { featureDetailsFormModel } from "./features-form.model";
import { personDetailsFormModel } from "./person-details-form.model";

export interface mobFormModel {
    personDetails: personDetailsFormModel,
    featureDetails: featureDetailsFormModel
}