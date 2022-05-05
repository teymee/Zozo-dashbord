export const actionTypes = {
      CREATE_BID_EVENT: "CREATE_BID_EVENT",
      CREATE_BID_EVENT_SUCCESS: "CREATE_BID_EVENT_SUCCESS",
      ADMIN_FETCH_BID_EVENTS: "ADMIN_FETCH_BID_EVENTS",
      ADMIN_FETCH_BID_EVENTS_SUCCESS: "ADMIN_FETCH_BID_EVENTS_SUCCESS",
      APPROVE_BID_EVENT: "APPROVE_BID_EVENT",
      APPROVE_BID_EVENT_SUCCESS: "APPROVE_BID_EVENT_SUCCESS",
      CANCEL_BID_EVENT: "CANCEL_BID_EVENT",
      CANCEL_BID_EVENT_SUCCESS: "CANCEL_BID_EVENT_SUCCESS",
}

export function actionCreateBidEvent (event){
      return{type:actionTypes.CREATE_BID_EVENT, event}
}

export function actionCreateBidEventSuccess (isCreated){
      console.log('created bid' + isCreated)
      return{type:actionTypes.CREATE_BID_EVENT_SUCCESS}
}

//ADMIN
export function actionAdminFetchAuctions (status){
      return {type:actionTypes.ADMIN_FETCH_BID_EVENTS, status}
}

export function actionAdminFetchAuctionsSuccess (auctions){
      console.log(auctions)
      return {type:actionTypes.ADMIN_FETCH_BID_EVENTS_SUCCESS, auctions}
}

export function actionApproveEvent (event_id){
      console.log(event_id)
      return {type:actionTypes.APPROVE_BID_EVENT, event_id}
}

export function actionApproveEventSuccess (isApproved){
      console.log(isApproved)
      return {type:actionTypes.APPROVE_BID_EVENT_SUCCESS, isApproved}
}

export function actionCancelEvent (event_id){
      console.log(event_id)
      return {type:actionTypes.CANCEL_BID_EVENT, event_id}
}

export function actionCancelEventSuccess (isCancelled){
      console.log(isCancelled)
      return {type:actionTypes.CANCEL_BID_EVENT_SUCCESS, isCancelled}
}