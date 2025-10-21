// learn more about HTTP functions here: https://arc.codes/http
exports.handler = async function http (req) {
  const data = {
    users: [
      {
        "id": 1,
        "name": "Neuman Alkhalil",
        "username": "Noomy",
        "email": "Neuman.Alkhalil@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
        }
      },
      {
        "id": 2,
        "name": "Denim Hasanbasic",
        "username": "Sir Cumcalot",
        "email": "dendimir@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
        }
      },
      {
        "id": 3,
        "name": "Muhamed Khatib",
        "username": "mimipalys",
        "email": "mimimiimi@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
        }
      }]
  }
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
      'access-control-allow-origin': '*'
    },
    body: JSON.stringify(data.users)
  }
}
