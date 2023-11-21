# API ENDPOINT EVENT

## GET ALL EVENT
Endpoint: GET /api/events?page=0&limit=10 // limit default all

Public: 
- no need header Authorization

Header: 
- Authorization : "Bearer access_token"

Response Body Success
```json
{
  "data": [
    {
      "id": "event_id",
      "name": "ITC Cempaka Mas Donor Darah",
      "day": "kamis",
      "date": "20 November 2023",
      "hour": "09:00 - 14:00",
      "location": "Jakarta Pusat",
      "isSave": false
    },
    {
      "id": "event_id",
      "name": "ITC Cempaka Mas Donor Darah",
      "day": "kamis",
      "date": "20 November 2023",
      "hour": "09:00 - 14:00",
      "location": "Jakarta Pusat",
      "isSave": false
    },
    {
      "id": "event_id",
      "name": "ITC Cempaka Mas Donor Darah",
      "day": "kamis",
      "date": "20 November 2023",
      "hour": "09:00 - 14:00",
      "location": "Jakarta Pusat",
      "isSave": false
    },
  ],
  "paging": {
    "page": 1,
    "total_item": 50,
    "total_page": 5
  }
}
```



## GET EVENT DETAILS
Endpoint: GET /api/events/event_id

Public:
- No need header Authorization 

Header:
- Authorization: 'Bearer access_token'

Response Body success
```json
{
  "data": {
    "id": "event_id",
    "name": "ITC Cempaka Mas Donor",
    "image": "http://......",
    ""
  }
}
```

