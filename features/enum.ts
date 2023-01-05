// // enum that represents the months of the year:
// enum Month {
//     jan,
//     feb,
//     mar,
//     apr,
//     may,
//     jun,
//     jul,
//     aug,
//     sep,
//     oct,
//     nov,
//     dec
// }

// // enum that represents the days of the week:
// enum Day {
//     sun,
//     mon,
//     tue,
//     wed,
//     thu,
//     fri,
//     sat
// }
// function isItSummer(month: Month) {
//     let isSummer : boolean;
//     switch(month){
//         case Month.jun:
//         case Month.jul:
//         case Month.aug:
//             isSummer = true;
//             break;
//         default:
//             isSummer = false;
//             break; 
//     }
//     return isSummer;
// }

// console.log(isItSummer(Month.jan));
// console.log(isItSummer(Month.jun));
//======    Quand utiliser une énumération  ==========

// (1)Have a small set of fixed values that are closely related
// (2) And these values are known at compile time

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
}
//Then, we can use the ApprovalStatus enum like this
const request = {
    id: 1,
    status: ApprovalStatus.approved,
    title: "test title",
    description: "Please approve this request"
}

if (request.status === ApprovalStatus.approved) {
    //send mail
    console.log('Send email to the Applicant...');
    console.log(request.description);

}