// // 云函数入口文件
// const cloud = require('wx-server-sdk')

// init()

// const db = database();
// const _ = db.command;

// // const awardsName = ['bl_cp', 'gl_cp', 'bg_cp', 'be_cp', 'time_machine_cp', 'disgusting_actor', 'poor_acting_actor', 'poor_acting_actress', 'ugly_song', 'rustic_actor'];

// // 云函数入口函数
// export async function main(event, context) {
//   const wxContext = getWXContext()
//   const openid = wxContext.OPENID;
//   // const table = awardsName[event.awardId];

//   // 判断是否到截止日期
//   const isExpiry = await db.collection('award_set').where({ 
//     key: 'expiryDate'
//   }).get().then(res => {
//       console.log(res.data[0]);
//       if(Date.parse(new Date()) > Date.parse(res.data[0].value)) {
//         return {
//           isSucceed : 3
//         }
//       } else {
//         return {
//           isSucceed : 0
//         }
//       }
//   })

//   if(isExpiry.isSucceed == 3) {
//     return isExpiry;
//   }

//   var today = new Date().toLocaleDateString();
//   const voteResult = await db.collection('users').where({
//     openid: openid,
//     // nickName: event.nickName,
//     // answernum: event.answernum,
//     // createCode: event.createCode,
//     create_time: _.and(_.gte(new Date(today+" 00:00:00")),_.lte(new Date(today+" 23:59:59")))
//   }).get().then(res => {
//     console.log(res.data.length)
//     if (res.data.length == 0 ) {

//       //投票
//       db.collection('users').add({
//         data: {
//           openid: openid,
//           nickName: event.nickName,
//           avatarUrl: event.avatarUrl,
//           answernum: event.answernum,
//           // createCode: event.createCode,
//         },
//         success: function(res) {
//           console.log(res)
//         }
//       })

//       //在对应的表格记录加1
//       // if (event.answernum == 1) {

//       //   db.collection('answer1')
//       //   // .where({
//       //   //   openid: event.openid
//       //   // })
//       //   .add({
//       //     data: {
//       //       openid: openid,
//       //       nickName: event.nickName,
//       //       avatarUrl: event.avatarUrl,
//       //       answernum: event.answernum,
//       //     },
//       //   })

//       // } else if (event.answernum == 2) {

//       //   db.collection('answer2')
//       //   // .where({
//       //   //   openid: event.openid
//       //   // })
//       //   .add({
//       //     data: {
//       //       openid: openid,
//       //       nickName: event.nickName,
//       //       avatarUrl: event.avatarUrl,
//       //       answernum: event.answernum,
//       //     },
//       //   })

//       // } else if (event.answernum == 3) {

//       //   db.collection('answer3')
//       //   // .where({
//       //   //   openid: event.openid
//       //   // })
//       //   .add({
//       //     data: {
//       //       openid: openid,
//       //       nickName: event.nickName,
//       //       avatarUrl: event.avatarUrl,
//       //       answernum: event.answernum,
//       //     },
//       //   })

//       // } else if (event.answernum == 4) {

//       //   db.collection('answer4')
//       //   // .where({
//       //   //   openid: event.openid
//       //   // })
//       //   .add({
//       //     data: {
//       //       openid: openid,
//       //       nickName: event.nickName,
//       //       avatarUrl: event.avatarUrl,
//       //       answernum: event.answernum,
//       //     },
//       //   })

//       // } else if (event.answernum == 5) {

//       //   db.collection('answer5')
//       //   // .where({
//       //   //   openid: event.openid
//       //   // })
//       //   .add({
//       //     data: {
//       //       openid: openid,
//       //       nickName: event.nickName,
//       //       avatarUrl: event.avatarUrl,
//       //       answernum: event.answernum,
//       //     },
//       //   })

//       // } else if (event.awardId == 5) {
  
//       //   db.collection('disgusting_actor').where({
//       //     candidateId: event.candidateId
//       //   })
//       //   .update({
//       //     data: {
//       //       votes: _.inc(1)
//       //     },
//       //   })

//       // } else if (event.awardId == 6) {
  
//       //   db.collection('poor_acting_actor').where({
//       //     candidateId: event.candidateId
//       //   })
//       //   .update({
//       //     data: {
//       //       votes: _.inc(1)
//       //     },
//       //   })

//       // } else if (event.awardId == 7) {
  
//       //   db.collection('poor_acting_actress').where({
//       //     candidateId: event.candidateId
//       //   })
//       //   .update({
//       //     data: {
//       //       votes: _.inc(1)
//       //     },
//       //   })

//       // } else if (event.awardId == 8) {
  
//       //   db.collection('ugly_song').where({
//       //     candidateId: event.candidateId
//       //   })
//       //   .update({
//       //     data: {
//       //       votes: _.inc(1)
//       //     },
//       //   })

//       // } else if (event.awardId == 9) {
  
//       //   db.collection('rustic_actor').where({
//       //     candidateId: event.candidateId
//       //   })
//       //   .update({
//       //     data: {
//       //       votes: _.inc(1)
//       //     },
//       //   })
//       // }

//       return {
//         isSucceed : 1
//       }
//     } else {
//         return {
//           isSucceed : 2
//         }
//     }
//   })

//   console.log(voteResult);

//   return voteResult
    
  
// }