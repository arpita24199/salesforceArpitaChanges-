import { LightningElement } from 'lwc';
import hasViewAllData from'@salesforce/userPermission/ViewAllData'
import myCustomPermission from '@salesforce/customPermission/show_details'
//first of all make a custom permission show_details and add it into permission set by creating new permission set
//permissionDemo and added show_details into the import section

export default class CheckPermissionDemo extends LightningElement {
    get hasViewAllDataAvailable(){
        return hasViewAllData
    }

    get hasCustomPermission(){
        return myCustomPermission
    }
}