export const ES_API_URL = 'http://localhost:9200/ecom-voyages-sailings/_search';
export const QUERY = {
    "from" : 0, 
    "size" : 1000,
    "query": {
      "bool": {
        "must": [
          {
            "range": {
              "embarkDate": {
                "gte": "startDate"
              }
            }
          },
          {
            "range": {
              "debarkDate": {
                "lte": "endDate"
              }
            }
          }
        ]
      }
    },
    "sort": [
      {
        "embarkDate": {
          "order": "asc"
        }
      }
    ]
  }