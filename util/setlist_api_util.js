var url = "https://data.blockbusting65.hasura-app.io/v1/query/";

 const createSetlist = (setlist) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer 623d47eddd9ad2d0d29b460a3b0a334a89eb180f1a94c6f3"
    }
  };

  let body = {
    "type": "insert",
    "args": {
      "table": "setlists",
      "objects": [
        {
          "name": setlist.name,
          "band_id": setlist.bandId,
          "description": setlist.description,
          "scheduled_date": setlist.scheduled_date
        }
      ],
      "returning": [
        "id",
        "name",
        "band_id",
        "description",
        "scheduled_date"
      ]
    }
  };

  requestOptions.body = JSON.stringify(body);

  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

 const fetchSetlist = (id) => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer 623d47eddd9ad2d0d29b460a3b0a334a89eb180f1a94c6f3"
    }
  };

  let body = {
    "type": "select",
    "args": {
      "table": "setlists",
      "columns": [
        "id",
        "name",
        "band_id",
        "description",
        "scheduled_date"
      ],
      "where": {
        "id": {
          "$eq": id
        }
      }
    }
  };

  requestOptions.body = JSON.stringify(body);

  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};

 const fetchSetlists = () => {
  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer 623d47eddd9ad2d0d29b460a3b0a334a89eb180f1a94c6f3"
    }
  };

  let body = {
    "type": "select",
    "args": {
      "table": "setlists",
      "columns": [
        "id",
        "name",
        "band_id",
        "description",
        "scheduled_date"
      ]
    }
  };

  requestOptions.body = JSON.stringify(body);

  return fetch(url, requestOptions)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log('Request Failed:' + error);
    });
};
