import {test, expect} from '@playwright/test'

test.describe.skip("APITestcases", async()=>{

    test('GET Request', async ({ request }) => {
        const response = await request.get('https://automationexercise.com/api/productsList');
        
        const [jsonResponse, headersResponse, statusResponse] = await Promise.all([
          response.json(),
          response.headers(),
          response.status()
        ]);

        console.log(jsonResponse);
        // console.log(headersResponse);
        // console.log(statusResponse);

        //jsonResponse.products.forEach(product => console.log(product.name));

        // const filterWithID = jsonResponse.products.find(product => product.id >= 33 && product.id <= 40)
        // console.log(filterWithID)

        // jsonResponse.products.forEach(product => {
        //   console.log(`ID: ${product.id}, Name: ${product.name}`);
        // });

    });

    test("API 2: POST To All Products List", async({request})=>{
      const response = await request.post("https://automationexercise.com/api/productsList")

      const [jsonResponse, responseStatus] = await Promise.all([response.json(), response.status()])
      console.log(jsonResponse)
      console.log(responseStatus)
    })


    test("API 5: POST To Search Product", async({request})=>{
      const response = await request.post("https://automationexercise.com/api/searchProduct");
      const [jsonResponse, responseStatus] = await Promise.all([response.json(), response.status()]);
      console.log(jsonResponse);
      console.log(responseStatus);
    })


})





test.describe("secondSetAPI", async ()=>{

  let endpoint = "https://api.restful-api.dev/objects"
  let inputID  =""

  test("getAllReq", async({request})=>{
    const response = await request.get(endpoint);

    const [responseStatus, jsonResponse, headerJson] = 
        await Promise.all([response.status(), response.json(), response.headers()]);
    console.log(responseStatus)

    console.log(jsonResponse)

    console.log(headerJson)

  })


  test("getById", async({request})=>{
    const response = await request.get(endpoint+"?id=3&id=5&id=10");

    const [responseStatus, jsonResponse, headerJson] = 
        await Promise.all([response.status(), response.json(), response.headers()]);
    //console.log(responseStatus)

    console.log("response2 : ",jsonResponse)

    //console.log(headerJson)

  })


  test.only("getSingleObject", async({request})=>{
    const response = await request.get(endpoint+"/"+"ff808181932badb60195286989b279d0");

    const [responseStatus, jsonResponse, headerJson] = 
        await Promise.all([response.status(), response.json(), response.headers()]);
    //console.log(jsonResponse)
    inputID = jsonResponse.id

    //console.log(endpoint+"/"+inputID);
    console.log(endpoint+"/"+inputID)
    var input2 = endpoint+"/"+`"${inputID}"`
    const response2 = await request.get(input2)
    console.log(response2)

  })


  test("createObjectPost", async({request})=>{
    const response = await request.post(endpoint,
      {
        data: {
          name: "Ammar Apple MacBook Pro 16 new3",
          data: {
             year : 2019,
             price : 1849.99,
             "CPU model": "Intel Core i9",
             "Hard disk size": "1 TB"
          }
        }
      }
    );

    const [responseStatus, jsonResponse, headerJson] = 
    await Promise.all([response.status(), response.json(), response.headers()]);
    console.log(jsonResponse)
    console.log(responseStatus)

  })


  test("putUpdate", async({request})=>{
    const response = await request.put(endpoint+"/"+"ff808181932badb60195286989b279d0",
      {
        data: {
          name: "Ammar Apple MacBook Pro 16",
          data: {
             year : 2024,
             price : 2500,
             "CPU model": "Intel Core i9",
             "Hard disk size": "1 TB"
          }
        }
      }
    );

    const [responseStatus, jsonResponse, headerJson] = 
        await Promise.all([response.status(), response.json(), response.headers()]);
    console.log(jsonResponse)
    console.log(responseStatus)

  })

  test("patchUpdate", async({request})=>{
    const response = await request.patch(endpoint+"/ff808181932badb601952838a7777944",
      {
        data: {
          name: "Ammar new2 updateApple MacBook Pro 16 (updated)",
          
        }
      }
    );

    const [responseStatus, jsonResponse, headerJson] = 
        await Promise.all([response.status(), response.json(), response.headers()]);
    console.log(jsonResponse)
    console.log(responseStatus)

  })
  
  // test.skip('send POST request with payload', async ({ request }) => {
  //   const endpoint = 'https://api.restful-api.dev/objects';
  //   const payload = {
  //     name: "Apple MacBook Pro 16 new2",
  //     data: {
  //       year: 2019,
  //       price: 1849.99,
  //       "CPU model": "Intel Core i9",
  //       "Hard disk size": "1 TB"
  //     }
  //   };

  //   const response = await request.post(endpoint, {
  //     data: payload
  //   });

  //   // Check the response status
  //   expect(response.status()).toBe(200);

  //   // Log the response body
  //   const responseBody = await response.json();
  //   console.log('Response:', responseBody);
  // });

  

})

