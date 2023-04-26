import { link } from 'fs';
import { PatientNote } from './../../model/patient-notes';
import { PatientListResponse } from './../../model/patient';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http/http-service.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ManagementService {
  constructor(
    private httpService: HttpServiceService,
    private http: HttpClient
  ) {}

  private baseUrl = 'api';

  login(params: any) {
    return this.httpService.post(`${this.baseUrl}/login`, params);
  }

  clientlogin(params: any) {
    return this.httpService.post(`${this.baseUrl}/clientlogin`, params);
  }

  redirect(params: any) {
    return this.httpService.post(`${this.baseUrl}/loginwithtoken`, params);
  }

  patientList(params:any) {
    return this.httpService.get<PatientListResponse>(
      `${this.baseUrl}/getpatientlist?uniqueId=${params.uniqueId}&status=${params.status}&username=${params.username}&firstName=${params.firstName}&lastName=${params.lastName}&phone=${params.phone}&patientGroup=${params.patientGroup}`
    );
  }

  patientDetails(patientId?: string) {
    return this.httpService.get<PatientListResponse>(
      `${this.baseUrl}/getpatientdetails?patientid=${patientId}`
    );
  }

  getClinicianList(links?: string) {
    let url = `${this.baseUrl}/getclinicianlist`;
    if (links != null) url += links;
    return this.httpService.get<PatientListResponse>(url);
  }

  getPatientNoteList(patientId?: string) {
    return this.httpService.get<PatientListResponse>(
      `${this.baseUrl}/getpatientnotelist?patientid=${patientId}`
    );
  }
  createpatientnote(params: PatientNote) {
    let iscom = params.iscompleted == true ? 1 : 0;
    let url = `${this.baseUrl}/createpatientnote`
    return this.httpService.post<any>(`${url}`, params);
  }

  deleteNote(noteid: number) {
    return this.httpService.delete<any>(
      `${this.baseUrl}/deletenote?noteid=${noteid}`
    );
  }

  getMedicalPlanList(patientId?: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/getmedicalplanlist?patientid=${patientId}`
    );
  }

  getMedicalPlanRowList(treatmentid: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/getmedicalplanrowlist?treatmentid=${treatmentid}`
    );
  }

  setMedicalPlan(params: any) {
    let url = `${this.baseUrl}/setmedicalplan?treatmentid=${params.treatmentid}&form=${params.form}&unit=${params.unit}&commercialname=${params.commercialname}&activeingredient=${params.activeingredient}&patientid=${params.patientid}&dose=${params.dose}&applicationform=${params.applicationform}&doseearly=${params.doseearly}&dosenoon=${params.dosenoon}&doseafternoon=${params.doseafternoon}&doseevening=${params.doseevening}&reason=${params.reason}&dosestrength=${params.dosestrength}&description=${params.description}`;
    if (params.medicalplanid != null)
      url += `&medicationplanid=${params.medicalplanid}`;
    return this.httpService.get<any>(url);
  }
  deleteMedicationPlan(treatmentid: string) {
    return this.httpService.delete<any>(
      `${this.baseUrl}/deletemedicationplan?treatmentid=${treatmentid}`
    );
  }
  deleteMedicationPlanRow(medicationplanid: string) {
    return this.httpService.delete<any>(
      `${this.baseUrl}/deletemedicationplanrow?medicationplanid=${medicationplanid}`
    );
  }

  getExaminationList(patientid?: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/getexaminationlist?patientid=${patientid}`
    );
  }
  setExamination(params: any) {
    let iscom = params.iscompleted == true ? 1 : 0;
    let url = `${this.baseUrl}/setexamination`;
    return this.httpService.post<any>(url, params);
  }
  deleteExamination(examinationid: string) {
    return this.httpService.delete<any>(
      `${this.baseUrl}/deleteexamination?examinationid=${examinationid}`
    );
  }

  getCallLogs(patientid?: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/getcalllogs?patientid=${patientid}`
    );
  }
  setCallLog(params: any) {
    let url = `${this.baseUrl}/setcalllog`;
    return this.httpService.post<any>(url, params);
  }
  deleteCallLog(calllogid: string) {
    return this.httpService.delete<any>(
      `${this.baseUrl}/deletecalllog?calllogid=${calllogid}`
    );
  }

  getMeetingContents(patientid?: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/getmeetingcontents?patientid=${patientid}`
    );
  }
  setMeetingContent(params: any) {
    let url = `${this.baseUrl}/setmeetingcontent`;
    return this.httpService.post<any>(url, params);
  }
  deleteMeetingContent(meetingcontentid: string) {
    return this.httpService.delete<any>(
      `${this.baseUrl}/deletemeetingcontent?meetingcontentid=${meetingcontentid}`
    );
  }

  medicalPlanPdf(treatmentid: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/medicalplan-pdf?treatmentid=${treatmentid}`
    );
  }

  sendPdf(patientId?: number, treatmentid?: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/sendpdftopatient?patientid=${patientId}&treatmentid=${treatmentid}`
    );
  }
  changetreatmentdoctor(treatmentid: string, responsibleclinicianid: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/changetreatmentdoctor?treatmentid=${treatmentid}&responsibleclinicianid=${responsibleclinicianid}`
    );
  }
  updatepatientonboardingdate(othpatientid?: number, onboardingDate?: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/updatepatientonboardingdate?othpatientid=${othpatientid}&onboardingdate=${onboardingDate}`
    );
  }
  getNotificationList() {
    return this.httpService.get<any>(`${this.baseUrl}/getnotificationlist`);
  }

  getMedicationPlanArchieve(treatmentid?: number) {
    return this.httpService.get<any>(
      `${this.baseUrl}/getmedicationplanarchieve?treatmentid=${treatmentid}`
    );
  }
  getuseruploadpermission() {
    return this.httpService.get<any>(`${this.baseUrl}/getuseruploadpermission`);
  }
  getcategorylist() {
    return this.httpService.get<any>(`${this.baseUrl}/getcategorylist`);
  }
  getpatientgrouplist() {
    return this.httpService.get<any>(`${this.baseUrl}/getpatientgrouplist`);
  }
  getcategorydetails(categoryId: String) {
    return this.httpService.get<any>(
      `${this.baseUrl}/getcategorydetails?categoryid=${categoryId}`
    );
  }
  setcategory(params: any) {
    let url = `${this.baseUrl}/setcategory`;
    return this.httpService.post<any>(url, params);
  }
  deletecategory(categoryId?: string) {
    let url = `${this.baseUrl}/deletecategory?categoryid=${categoryId}`;
    return this.httpService.delete<any>(url);
  }


  uploadFile(params: object){
    let url = `${this.baseUrl}/uploadfile`;
    return this.httpService.post<any>(url, params);
  }

  deleteFile(fileId: object){
    let url = `${this.baseUrl}/deleteuserfile?fileid=${fileId}`;
    return this.httpService.post<any>(url);
  }

  getUserFile(fileId:string){
    let url = `${this.baseUrl}/getuserfile?fileid=${fileId}`;
    return this.httpService.get<any>(url);
  }


  getPatientMessages(patientid?: string) {
    return this.httpService.get<any>(
      `${this.baseUrl}/getpatientmessagelist?patientid=${patientid}`
    );
  }
  setPatientMessage(params: any) {
    let url = `${this.baseUrl}/setpatientmessage`;
    return this.httpService.post<any>(url, params);
  }

  setPatient(params: any) {
    let url = `${this.baseUrl}/setpatient`;
    return this.httpService.post<any>(url, params);
  }



  deletePatientMessage(messageid: string) {
    return this.httpService.delete<any>(
      `${this.baseUrl}/deletepatientmessage?messageid=${messageid}`
    );
  }

  renewToken(){
    let url = `${this.baseUrl}/renewtoken`;
    return this.httpService.get<any>(url);
  }

  getUserInfo(userName:string){
    let url = `${this.baseUrl}/getuserinfo?userName=${userName}`;
    return this.httpService.get<any>(url);
  }

  resetPassword(othPatientId: String, temporaryPassword: String ) {
    return this.httpService.delete<any>(
      `${this.baseUrl}/resetpassword?userId=${othPatientId}&temporaryPassword=${temporaryPassword}`
    );
  }

  accountLocked(userId?: String, accountLocked?: boolean ) {
    return this.httpService.get<any>(
      `${this.baseUrl}/accountlocked?userId=${userId}&accountLocked=${accountLocked}`
    );
  }
  downloadPdf() {}
}
