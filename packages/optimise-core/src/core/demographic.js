import ErrorHelper from '../utils/error_helper';
import message from '../utils/message-utils';
import { getEntry, createEntry, deleteEntry, updateEntry, searchEntry } from '../utils/controller-utils';

export class DemographicCore {

    static getDemographic(whereObj) {
        return new Promise((resolve, reject) => getEntry('PATIENT_DEMOGRAPHIC', whereObj, '*').then((result) => {
            if (result.length > 0) {
                for (let i = 0; i < result.length; i++) {
                    delete result[i].createdByUser;
                    delete result[i].createdTime;
                    delete result[i].deleted;
                }
            }
            return resolve(result);
        }).catch((error) => reject(ErrorHelper(message.errorMessages.GETFAIL, error))));
    }

    static editDemographic(user, demogEntry) {
        return new Promise((resolve, reject) => updateEntry('PATIENT_DEMOGRAPHIC', user, '*', { id: demogEntry.id }, demogEntry).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.UPDATEFAIL, error))));
    }

    static createDemographic(entryObj) {
        return new Promise((resolve, reject) => createEntry('PATIENT_DEMOGRAPHIC', entryObj).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.CREATIONFAIL, error))));
    }

    static deleteDemographic(user, whereObj) {
        return new Promise((resolve, reject) => deleteEntry('PATIENT_DEMOGRAPHIC', user, whereObj).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.CREATIONFAIL, error))));
    }

    static getCountryFields() {
        return new Promise((resolve, reject) => getEntry('COUNTRIES', {}, '*').then((result) => {
            const returnObj = { countries: result };
            return resolve(returnObj);
        }).catch((error) => reject(error)));
    }

    static getEthnicityFields() {
        return new Promise((resolve, reject) => getEntry('ETHNICITIES', {}, '*').then((result) => {
            const returnObj = { ethnicities: result };
            return resolve(returnObj);
        }).catch((error) => reject(error)));
    }

    static getDominantHandsFields() {
        return new Promise((resolve, reject) => getEntry('DOMINANT_HANDS', {}, '*').then((result) => {
            const returnObj = { dominant_hands: result };
            return resolve(returnObj);
        }).catch((error) => reject(error)));
    }

    static getGenderFields() {
        return new Promise((resolve, reject) => getEntry('GENDERS', {}, '*').then((result) => {
            const returnObj = { genders: result };
            return resolve(returnObj);
        }).catch((error) => reject(error)));
    }
}

export class MedicalHistoryCore {

    static getMedicalHistory(whereObj) {
        return new Promise((resolve, reject) => getEntry('MEDICAL_HISTORY', whereObj, '*').then((result) => {
            if (result.length > 0) {
                for (let i = 0; i < result.length; i++) {
                    delete result[i].createdByUser;
                    delete result[i].createdTime;
                    delete result[i].deleted;
                }
            }
            return resolve(result);
        }).catch((error) => reject(ErrorHelper(message.errorMessages.GETFAIL, error))));
    }

    static editMedicalHistory(user, demogEntry) {
        return new Promise((resolve, reject) => updateEntry('MEDICAL_HISTORY', user, '*', { id: demogEntry.id }, demogEntry).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.UPDATEFAIL, error))));
    }

    static createMedicalHistory(entryObj) {
        return new Promise((resolve, reject) => createEntry('MEDICAL_HISTORY', entryObj).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.CREATIONFAIL, error))));
    }

    static deleteMedicalHistory(user, whereObj) {
        return new Promise((resolve, reject) => deleteEntry('MEDICAL_HISTORY', user, whereObj).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.CREATIONFAIL, error))));
    }

    static getRelations() {
        return new Promise((resolve, reject) => getEntry('RELATIONS', {}, '*').then((result) => {
            const returnObj = { relations: result };
            return resolve(returnObj);
        }).catch((error) => reject(error)));
    }

    static getConditions() {
        return new Promise((resolve, reject) => getEntry('CONDITIONS', {}, '*').then((result) => {
            const returnObj = { conditions: result };
            return resolve(returnObj);
        }).catch((error) => reject(error)));
    }
}

export class ImmunisationCore {

    static getImmunisation(whereObj) {
        return new Promise((resolve, reject) => getEntry('PATIENT_IMMUNISATION', whereObj, '*').then((result) => {
            if (result.length > 0) {
                for (let i = 0; i < result.length; i++) {
                    delete result[i].createdByUser;
                    delete result[i].createdTime;
                    delete result[i].deleted;
                }
            }
            return resolve(result);
        }).catch((error) => reject(ErrorHelper(message.errorMessages.GETFAIL, error))));
    }

    static editImmunisation(user, demogEntry) {
        return new Promise((resolve, reject) => updateEntry('PATIENT_IMMUNISATION', user, '*', { id: demogEntry.id }, demogEntry).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.UPDATEFAIL, error))));
    }

    static createImmunisation(entryObj) {
        return new Promise((resolve, reject) => createEntry('PATIENT_IMMUNISATION', entryObj).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.CREATIONFAIL, error))));
    }

    static deleteImmunisation(user, whereObj) {
        return new Promise((resolve, reject) => deleteEntry('PATIENT_IMMUNISATION', user, whereObj).then((result) => resolve(result)).catch((error) => reject(ErrorHelper(message.errorMessages.CREATIONFAIL, error))));
    }
}

export class PregnancyCore {

    //PATIENT_PREGNANCY
    static getPregnancy(whereObj) {
        return new Promise((resolve, reject) => getEntry('PATIENT_PREGNANCY', whereObj, { id: 'id', patient: 'patient', startDate: 'startDate', outcome: 'outcome', outcomeDate: 'outcomeDate', meddra: 'meddra', deleted: 'deleted' }).then((result) => resolve(result)).catch((error) => reject(error)));
        // return new Promise((resolve, reject) => searchEntry('PATIENT_PREGNANCY', whereObj, { id: 'id', patient: 'patient', startDate: 'startDate', outcome: 'outcome', outcomeDate: 'outcomeDate', meddra: 'meddra', deleted: 'deleted' }).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static createPregnancy(entryObj) {
        return new Promise((resolve, reject) => createEntry('PATIENT_PREGNANCY', entryObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static editPregnancy(user, entryObj) {
        return new Promise((resolve, reject) => updateEntry('PATIENT_PREGNANCY', user, '*', { id: entryObj.id }, entryObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static deletePregnancy(user, whereObj) {
        return new Promise((resolve, reject) => deleteEntry('PATIENT_PREGNANCY', user, whereObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    //PREGNANCY_OUTCOMES
    static getPregnancyOutcomes() {
        return new Promise((resolve, reject) => getEntry('PREGNANCY_OUTCOMES', {}).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static createPregnancyOutcomes(entryObj) {
        return new Promise((resolve, reject) => createEntry('PREGNANCY_OUTCOMES', entryObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static editPregnancyyOutcomes(user, entryObj) {
        return new Promise((resolve, reject) => updateEntry('PREGNANCY_OUTCOMES', user, '*', { id: entryObj.id }, entryObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static deletePregnancyyOutcomes(user, whereObj) {
        return new Promise((resolve, reject) => deleteEntry('PREGNANCY_OUTCOMES', user, whereObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }


    //PATIENT_PREGNANCY_DATA
    static getPregnancyData() {
        return new Promise((resolve, reject) => getEntry('PPATIENT_PREGNANCY_DATA', {}).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static createPregnancyData(entryObj) {
        return new Promise((resolve, reject) => createEntry('PPATIENT_PREGNANCY_DATA', entryObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static editPregnancyyData(user, entryObj) {
        return new Promise((resolve, reject) => updateEntry('PPATIENT_PREGNANCY_DATA', user, '*', { id: entryObj.id }, entryObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static deletePregnancyyData(user, whereObj) {
        return new Promise((resolve, reject) => deleteEntry('PPATIENT_PREGNANCY_DATA', user, whereObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    //PATIENT_PREGNANCY_IMAGING
    static getPregnancyImage() {
        return new Promise((resolve, reject) => getEntry('PATIENT_PREGNANCY_IMAGING', {}).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static createPregnancyImage(entryObj) {
        return new Promise((resolve, reject) => createEntry('PATIENT_PREGNANCY_IMAGING', entryObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static editPregnancyyImage(user, entryObj) {
        return new Promise((resolve, reject) => updateEntry('PATIENT_PREGNANCY_IMAGING', user, '*', { id: entryObj.id }, entryObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

    static deletePregnancyyImage(user, whereObj) {
        return new Promise((resolve, reject) => deleteEntry('PATIENT_PREGNANCY_IMAGING', user, whereObj).then((result) => resolve(result)).catch((error) => reject(error)));
    }

}

export default { DemographicCore, MedicalHistoryCore, ImmunisationCore, PregnancyCore };