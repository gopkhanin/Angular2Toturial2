export class User{
    // User
    show : boolean;
    Nameth : string;
    Surnameth : string;
    Nameeng : string;
    Surnameeng : string;
    id13 : string;
    nationality_txt : string;
    nationality_temp : string;
    status : string;
    Namemarryth : string;
    Surnamemarryth : string;
    Namemarryeng : string;
    Surnamemarryeng : string;

    // Money
    Money : string;
    Moneycustomer : string;
    // Job
    Study : string;
    Job : string;
    Jobtxt : string;
    JobRule : string;
    JobName : string;
    JobType : string;
    JobTypetxt : string;
    //Disclosure
    disclosureOne : string;
    disclosureOneTxt : string;
    disclosureTwo : string;
    disclosureTwoTxt : string;
    disclosureThree : string;
    disclosureThreeTxt : string;
    disclosureFour : string;
    disclosureFourTxt : string;
    disclosureFive : string;
    disclosureFiveTxt : string;
    disclosureSix : string;
    disclosureSixTxt : string;

    constructor() {
        // User
        this.show = false;
        this.Nameth = null;
        this.Surnameth = null;
        this.Nameeng = null;
        this.Surnameeng = null;
        this.id13 = null;
        this.nationality_txt = null;
        this.nationality_temp = null;
        this.status = null;
        this.Namemarryth = null;
        this.Surnamemarryth = null;
        this.Namemarryeng = null;
        this.Surnamemarryeng = null;
        // Money
        this.Money = null;
        this.Moneycustomer = null;
        // Job
        this.Study = null;
        this.Job = null;
        this.Jobtxt = null;
        this.JobName = null;
        this.JobRule = null;
        this.JobType = null;
        this.JobTypetxt = null;
        //Disclosure
        this.disclosureOne = null;
        this.disclosureOneTxt = null;
        this.disclosureTwo = null;
        this.disclosureTwoTxt = null;
        this.disclosureThree = null;
        this.disclosureThreeTxt = null;
        this.disclosureFour = null;
        this.disclosureFourTxt = null;
        this.disclosureFive = null;
        this.disclosureFiveTxt = null;
        this.disclosureSix = null;
        this.disclosureSixTxt = null;
    }
    getNationality(){
        if(this.nationality_txt == '0'){
            return 'ไทย';
        }
    }
    getStatus(){
        if(this.status=='0'){
            return 'โสด';
        }
        else if (this.status == '1'){
            return 'สมรส';
        }
        else if (this.status == '2'){
            return 'หม้าย';
        }
        else if (this.status == '3'){
            return 'หย่า';
        }
    }
    getMoney(){
        if(this.Money == '0'){
            return 'ต่ำกว่า 5 แสนบาท';
        }
        else if(this.Money == '1'){
            return 'ตั้งแต่ 5 แสนบาท แต่ไม่ถึง 1 ล้านบาท';
        }
        else if(this.Money == '2'){
            return 'ตั้งแต่ 1 ล้าน แต่ไม่ถึง 4 ล้านบาท';
        }
        else if(this.Money == '3'){
            return 'ตั้งแต่ 1 ล้าน แต่ไม่ถึง 4 ล้านบาท';
        }
        else if(this.Money == '4'){
            return 'ตั้งแต่ 4 ล้านบาทขึ้นไป';
        }
    }
    getCustomer(){
        if(this.Moneycustomer == '0'){
            return 'ต่ำกว่า 2 ล้านบาท';
        }
        else if(this.Moneycustomer == '1'){
            return 'ตั้งแต่ 2 ล้าน แต่ไม่ถึง 5 ล้านบาท';
        }
        else if(this.Moneycustomer == '2'){
            return 'ตั้งแต่ 5 ล้าน แต่ไม่ถึง 10 ล้านบาท';
        }
        else if(this.Moneycustomer == '3'){
            return 'ตั้งแต่ 10 ล้าน แต่ไม่ถึง 30 ล้านบาท';
        }
        else if(this.Moneycustomer == '4'){
            return 'ตั้งแต่ 30 ล้าน แต่ไม่ถึง 50 ล้านบาท';
        }
        else if(this.Moneycustomer == '5'){
            return 'ตั้งแต่ 50 ล้านบาทขึ้นไป';
        }
    }
    getStudy(){

        if(this.Study == '0'){
            return 'ต่ำกว่าปริญญาตรี';
        }
        else if(this.Study == '1'){
            return 'ปริญญาตรี';
        }
        else if(this.Study == '2'){
            return 'สูงกว่าปริญญาตรี';
        }
    }
    getJob(){
        if(this.Job == '0'){
            return 'พนักงาน/ผู้บริหารบริษัทเอกชน';
        }
        else if(this.Job == '1'){
            return 'เจ้าของกิจการ';
        }
        else if(this.Job == '2'){
            return 'ข้าราชการ/พนักงานรัฐวิสาหกิจ';
        }
        else if(this.Job == '3'){
            return 'นิสิต/นักศึกษา';
        }
        else if(this.Job == '4'){
            return 'พ่อบ้าน/แม่บ้าน/ไม่ได้ทำงาน';
        }
        else if(this.Job == '5'){
            return 'เกษียณอายุ';
        }
    }
    getJobType(){

        if(this.JobType == '0'){
            return 'หน่วยงานราชการ/รัฐวิสาหกิจ';
        }
        else if(this.JobType == '1'){
            return 'สถาบันการศึกษา';
        }
        else if(this.JobType == '2'){
            return 'การเงิน/การธนานคาร/ประกันภัย';
        }
        else if(this.JobType == '3'){
            return 'วิศวกรรม/เทคโนโลยี/ยานยนต์';
        }
        else if(this.JobType == '4'){
            return 'พลังงาน/สาธารณูปโภค';
        }
        else if(this.JobType == '5'){
            return 'ก่อสร้าง/อสังหาริมทรัพย์';
        }
        else if(this.JobType == '6'){
            return 'ค้าส่ง/ค้าปลีก';
        }
        else if(this.JobType == '7'){
            return 'ขนส่ง/บรรจุภัณฑ์';
        }
        else if(this.JobType == '8'){
            return 'สื่อ/สิ่งพิมพ์/บันเทิง';
        }
        else if(this.JobType == '9'){
            return 'บริการด้านความงาม/สุขภาพ';
        }
        else if(this.JobType == '10'){
            return 'บริการทางการแพทย์';
        }
        else if(this.JobType == '11'){
            return 'ศาสนสถาน/องค์กรที่ไม่แสดงหากำไร/การกุศล';
        }
        else if(this.JobType == '12'){
            return 'สำนักกฏหมายสำนักกฏหมาย';
        }
        else if(this.JobType == '13'){
            return 'สิ่งทอ/เสื้อผ้า/เครื่องแต่งกาย';
        }
        else if(this.JobType == '14'){
            return 'ธุรกิจแลกเปลี่ยนเงินตรา/โอนเงินระหว่างประเทศ';
        }
        else if(this.JobType == '15'){
            return 'บริการด้านการท่องเที่ยว/บริษัททัวร์';
        }
        else if(this.JobType == '16'){
            return 'ค้าของเก่า/วัตถุโบราณ';
        }
        else if(this.JobType == '17'){
            return 'ค้าทอง/โลหะมีค่า/อัญมณี/เครื่องประดับมีค่า';
        }
        else if(this.JobType == '18'){
            return 'บริการด้านการจัดหางาน';
        }
    }
    getDislosureOne(){
        if(this.disclosureOne == '1'){
            return 'เงินเดือน';
        }
        else if(this.disclosureOne == '2'){
            return 'การประกอบธุรกิจ';
        }
        else if(this.disclosureOne == '3'){
            return 'การลงทุน';
        }
    }
}