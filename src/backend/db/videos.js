import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "Dog on a farm",
    thumbnail:
      "https://image.mux.com/GBaDX100XzEK9kHc01Ehf5aPX6qopprnUo/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTI4MiwiYXVkIjoidCIsInN1YiI6IkdCYURYMTAwWHpFSzlrSGMwMUVoZjVhUFg2cW9wcHJuVW8ifQ.lZrcYDgjGyPk7ZOemPt2yHGI6GDaa68L31eVBe4751Ial2kERD23iaEINfbtxJSsS-_sXMOU7EbKj3objgdCzB4C-BjJAJkEBZseZ4MrJo_S555Ljf2wdnNHAspHzN1oRi0KaIB5GbTBPd7GSw0XXNJ3G8LoEL_bZGCGA2phk6OksvypxU2vYaHxcLcQh42dPcy85le528ht3_3Ay87iDcH7i7tjvJQa7XlP_1SQ_b7uwI53SEzw16DhnxZUkg7EQtwLY2QpDEh3WvxaanNGT5WQ5PSv6m368iXmpld3zTxFljRZ6BcAULGlfLTgDHV-iavUmdouRhAV7Yyfrdt-zw",
    description: "Mid-shot of a dog resting outdoors on a farm. ",
    views: "2658",
    user: "Neel",
    category: "Dog",
    src: "https://storage.coverr.co/videos/GBaDX100XzEK9kHc01Ehf5aPX6qopprnUo/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Dog being stroked",
    thumbnail:
      "https://image.mux.com/J9RaQ6qdjA8c5xp02Mq01bvA02pyoK8ccM00/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTI4MiwiYXVkIjoidCIsInN1YiI6Iko5UmFRNnFkakE4YzV4cDAyTXEwMWJ2QTAycHlvSzhjY00wMCJ9.RgnCsPkE-nv1vYi__J8ZV1HFRNYHotC8Wo2OkhSzicxsPkjdMOp4zpYsQTj_SGFbj4tYrvL-M80hs_hLCHSQvmaDv1ZFR8gfcqA_txJ5FT9QBoTGP7QoWx6MX-RT9Cy2W6CY6Q4b_QYcg_9b-Y3APBvPWZM-QCuLw3Sdvb3FVZgCTCGJbZokCnbd5HTyy9nFgfkPZCIK2F9kucKeT-9zNdA1kCNyNw3yLUrJaNnCj0y4XIputQBI4tOyIcuws_-VkuwevkI3XT_aV_8LaDNZgjyNkqdOWCSxCzZZxEC0cOu_EV9BjOb5HqnT62w2EqCJDw1YyJSwIlg1FjT46wqXWA",
    description: "Close-up shot of a dog being sroked. ",
    views: "4521",
    user: "Tokyo",
    category: "Dog",
    src: "https://storage.coverr.co/videos/J9RaQ6qdjA8c5xp02Mq01bvA02pyoK8ccM00/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Cat standing on a table",
    thumbnail:
      "https://image.mux.com/f00VX012PFAXzRJ4b8sthHcWZ02jstACYhS/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MDg4MywiYXVkIjoidCIsInN1YiI6ImYwMFZYMDEyUEZBWHpSSjRiOHN0aEhjV1owMmpzdEFDWWhTIn0.usLOoXWYyw9_SYT-VEigt5FI_b0gyHF2Ehq6aDIKI4GGoU-VrUYplZtca9rTyKqIsuP0q9lHz8jxNQqHMPxhWCDxaFcSgHa__51MQVpzHqRYUsTXRmEJXZkDeKROqI8eGKk3nY4VTQsEgf6jNU_nQEDEDdemN4tSDqQ9p2fsM4MOYCMMlaqr5K9vGpUO0P2IdmaYca3ykU7dU84tMtjQWFF7kPTcnw85WzolrnsCUntvquVrGUD12ILQ8dEyasP-ADFc_tbD7YA5devOCcmhIrEq8NAYnxxtFZg0EbxGFaMLUKXJSAva3Mt5pZFoxRA7fbnAc2zEbwldNlEq8ZGbIQ",
    description:
      "A still shot of a cat standing up on a table waiting to eat its owner's food from a plate.",
    views: "4521",
    user: "Ross",
    category: "Cat",
    src: "https://storage.coverr.co/videos/f00VX012PFAXzRJ4b8sthHcWZ02jstACYhS/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Man stroking a dog in a shelter",
    thumbnail:
      "https://image.mux.com/KwKTXTGqBDd901LgnS1xjFdLuAU1A4wVb/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTI4NiwiYXVkIjoidCIsInN1YiI6Ikt3S1RYVEdxQkRkOTAxTGduUzF4akZkTHVBVTFBNHdWYiJ9.EdWgIuPe1UCjW4s8hRooQxw2Cv7sC51r3A2Io1VuqkBJSF3b4sRsMCXJICIqFPrQjzWaH2vKdGhbasNpc-f6wFaS7TtfTPMiKf_WjnI-inG0p3_-a3tcLW_ETUIziTWbuJyFJsk2YCY6CL2GzrRVoNYnzGYhY8x5p6F3TCsqpZCVw9xxF8Y49356ZQVviqckRFPb7JICd1WKEdBrJoYDNRkRJWn_FYU3b_64Re6swrWIsHi4uiYuI7xUqrLVQWlH0Qd04V-i3m0xjPk4bqaFtOvhhuph3u1EJ0hYBQhHv9yyx6gtAWynEy9c7ROAgIRtR9d0l6GDfwo-pa_iXv_xxw",
    description: "High-angle shot of a man stroking a dog in a shelter. ",
    views: "6699",
    user: "Penny",
    category: "Dog",
    src: "https://storage.coverr.co/videos/KwKTXTGqBDd901LgnS1xjFdLuAU1A4wVb/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Black kitten cleaning its paws",
    thumbnail:
      "https://image.mux.com/LrWVZ6w9yx00GDtQ02chOsZ1FblQg4IVWw/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MDg1OSwiYXVkIjoidCIsInN1YiI6IkxyV1ZaNnc5eXgwMEdEdFEwMmNoT3NaMUZibFFnNElWV3cifQ.iS2ZN9OM9sAaYOj0WOl7BC5iEKlw6wwrs0k6rEatFmCgC8yodDiy8HTX_6OBEeeJZ2v6fb1OyxPqDLK_6ZW5uregv3Zo01Bx_a3F7UhRR-r2jK22BT2PWy7du0HebOeHs51_EqIqgkVQXDwNa3fb5WXB_CFKxMBarMJPZsoT3bsewPDV9V7e28vL3GjDeOYWvxyDfZIRNCTjlvdP9SmZ1rE4Y89A1XKA4dOE27E8h9lpfW94Cd4wAyN4oSnXqBD6Y8l9JnBK4AUFScGOmMrU95diTknQAfj0pWNLEG3ykRUboePwL59zx3zFesaMRrQhLoFDJ4Iul11F1nzt1ltFEg",
    description:
      "Close-up shot of an adorable, black kitten cleaning its paws. ",
    views: "1113",
    user: "Carl",
    category: "Cat",
    src: "https://storage.coverr.co/videos/LrWVZ6w9yx00GDtQ02chOsZ1FblQg4IVWw/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Golden Retriever and Border Collie",
    thumbnail:
      "https://image.mux.com/00fOzdMJuf02soq8QqDZBHffFPRaPFOy9M/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MDg3OCwiYXVkIjoidCIsInN1YiI6IjAwZk96ZE1KdWYwMnNvcThRcURaQkhmZkZQUmFQRk95OU0ifQ.Mx06viQNSP0mPQsiomRTPMppO9wtJH2yLXFEOecv0vYb-DqJ0m-KUCMkKD3w-91t1dp0IOtcp-yiUp1dK6p2nlAwA3bsDWIpn1Ig8GSsm1oEoG0HGE9Xb_FecAo1jxuZPp9yxpzvLJJPplaUh3l-ciGHzXisqqfbo9jNh0vaT-s4jU50b14TdhE8rdHpGpEp6h6oEezJ7b8GJjrVT-eso6nSY-QKlqiFPmkzIkRmp28vHelj9cv7fznNjKz5pvU8e7jJQQ7jCJzUgcQEgG_FGmAzHlGev6AlLJ-d8US7sdgeYcEC4d_W2kAbSjgDAmym77W1BlpBvVN8XgeLeExQdQ",
    description:
      "Still shot of a Golden Retriever and a Border Collie having fun together on the grass. ",
    views: "6542",
    user: "Rachel Greene",
    category: "Dog",
    src: "https://storage.coverr.co/videos/00fOzdMJuf02soq8QqDZBHffFPRaPFOy9M/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Man with his dog",
    thumbnail:
      "https://image.mux.com/kfdHHKtzJ4HmrQPxbZ66ub2G2vPrHpR01/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTMyNSwiYXVkIjoidCIsInN1YiI6ImtmZEhIS3R6SjRIbXJRUHhiWjY2dWIyRzJ2UHJIcFIwMSJ9.DyoPrlpntFPBZiplsw5cDYQUq01SH8Pbtq9tjVyQjNcuYhB2fHgXAkNKR25agcx24b4-wZZPUMHNFPfvzNfKZu1Jg3o0YEdy3uC65o-hE1r0g05E4dVQxySec68Wxv5FF6-JMdc6neq8UDtJ2kvemjpaekqiVzm14seAZBAMgcAWqx1mWQOCMLSdO-H6Tywaroj5fvcfklg1QrhXVBw9AU9mP6nlDLF7KT9wlcWVJvRP2aSmUikx5I_EuWovK2i1kLtC4-YZSKLoazOgjd0CX3Z-N-Un4E7oTiipT4pJw0cAdJG2izu-u-XgXCjTHc-QVRIaYTHC_FE0CE1uCHgE4g",
    description: "Still shot of a man with his dog. ",
    views: "1259",
    user: "Denver",
    category: "Dog",
    src: "https://storage.coverr.co/videos/kfdHHKtzJ4HmrQPxbZ66ub2G2vPrHpR01/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Girl smiling and petting dogs",
    thumbnail:
      "https://image.mux.com/G01YwjXxrBkF01x6TxAMLqSUYMtIM3DMdw/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTMxOCwiYXVkIjoidCIsInN1YiI6IkcwMVl3alh4ckJrRjAxeDZUeEFNTHFTVVlNdElNM0RNZHcifQ.kgp10IYKnO3txArotj58RvNPFKMxewDJ9UwgcG9GziZkxMA1p4tyqoAb9grSXoKNDOaSPBxDrrbphqjDrGF7JGUk2Z77uGywQQtL9ypoxmliUuaE3lFR1vTJ8rQMo7s6CqUYIcHYyXcu8yctdcAJYox3aXT3FJU0RHfVKx0BPVqqrHVT-CLjaMV4-8lzXj_YOkoIyrRgw-Gkt3G0ZalvDF3BB-kJeTdR65pEVEb5wiHy670F6chSEaKZhmLGsO8J4iNRZS0vulLRA4YzwjqhDBOBaS39iLi8zR7VeILl_xThoXndDeYlym66_n7ynfqG3Sk6e01wLeqGyRB2uZcMTw",
    description: "Low-angle shot of a girl smiling and petting dogs. ",
    views: "9656",
    user: "Berlin",
    category: "Dog",
    src: "https://storage.coverr.co/videos/G01YwjXxrBkF01x6TxAMLqSUYMtIM3DMdw/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Cat at the breakfast table",
    thumbnail:
      "https://image.mux.com/Vcve11Kp8bptZ00n1nsBEOh02qF5fgShYW/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTE5OSwiYXVkIjoidCIsInN1YiI6IlZjdmUxMUtwOGJwdFowMG4xbnNCRU9oMDJxRjVmZ1NoWVcifQ.Tjd_SJ-TdypCjn0ruoD1zpiW4iQgE6oX9HW3KwOMVB4lO0pyuyW877R2dNLvGLdCd83tKqhCtFGJIwJffGW9pVKtWC6v147PemzopvBdbWw19j3c9xLKX1sACRpt9hPCmY5U3cYqTqCiU9zdRWsdhnudeV1AAnuRFJDyufJ6F4gjW_lqIotTttgT74Rck8EAwOR62OqgH6qQMIBaYyt5WdYxSiW92RcyUVSBcfYXTagX3RNISTYcKVvC9BUHjxILyJwrMs--Sg8FNezEl8DcUiFy0sanaqpDTjfnhaeYntyRpxIcjs8bba-cidpl1agolLFQW7ixNVr67HqPnu1cLA",
    description:
      "A mid shot of a cat sitting at the breakfast table trying to eat some banana pancakes. ",
    views: "5603",
    user: "Jhon Doe",
    category: "Cat",
    src: "https://storage.coverr.co/videos/Vcve11Kp8bptZ00n1nsBEOh02qF5fgShYW/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Cat eating grass",
    thumbnail:
      "https://image.mux.com/Jo25ox1ibDEFheB66TEtO40101gLmTRjBn/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTExMywiYXVkIjoidCIsInN1YiI6IkpvMjVveDFpYkRFRmhlQjY2VEV0TzQwMTAxZ0xtVFJqQm4ifQ.ZY5IgBGbwlP6lF9J24UgJrBMp7AFtisXRSEJ7on0SHNy5vp9HJ5xGYeIuAUvPeXUN16BmskbVsJssHphIk84ThCApGRfrgMeIBlGIrM5J0Xcy4RIR3yh6Et-GbI5Tc2bW3icdMh7VOau99cpMfD97V4M0QPjMqaYPcIuIeLmi2L6s5jldWVqbCvJlHoDg0Z_kE7tKNZZPuAMfaAK6essWkkQevxuZk27DukK7TZGzeIEOyI54EOvH4s6pX0uPbKZXxLzIOiZWgnBRxWJ7mU2BxqCV6cFyXmLHF6JtvUo842X_4mVNmEjdOCv_Bz19POT40zrCsod2jR_gMQ87mQ8-g",
    description: "Still shot of a cat eating grass in the garden. ",
    views: 5032,
    user: "Michal Scarn",
    category: "Cat",
    src: "https://storage.coverr.co/videos/Jo25ox1ibDEFheB66TEtO40101gLmTRjBn/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Dogs playing in a jungle",
    thumbnail:
      "https://image.mux.com/Yx7Bt4FMNRj5NlC01L39EBm02jLHD00vDco/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MDc3NCwiYXVkIjoidCIsInN1YiI6Ill4N0J0NEZNTlJqNU5sQzAxTDM5RUJtMDJqTEhEMDB2RGNvIn0.ngU2AyS0KXa1Afx_-awN2_A42nqdm-AzGrpUErLf6qoywRBw7H-eoYnxvNlNYCfSYioimRph9a454oZmh1guGG5URD2k3DuJZBggTIJLGebxyh7h4PN-nVc1vXz0gGCUySPP07yduA2YjnGDzXLZ_AwAlbYEUrqZAVM6dIEt3pKq1hl8VruHZhr2usyoUpjIn-e8xx8yT7VT83LJ1ovos2ZBjzNgdZM-npziiGpoSXZUAMUKS_L3IxYhAML16Rps2l6atsMV7dCR2evK17y0_m9FRGAcMmemrlgraX5S2d-9-seBaRLphLWZxnO1yv7YgGG4_XyFDnNl5gySM8UF1A",
    description: "Slow-motion shot of dogs playing in a jungle. ",
    views: "4562",
    user: "Jake Peralta",
    category: "Dog",
    src: "https://storage.coverr.co/videos/Yx7Bt4FMNRj5NlC01L39EBm02jLHD00vDco/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Man walking past a cat",
    thumbnail:
      "https://image.mux.com/ajUW00fo3YfzYphqEQSESqJx3N9401Uk00t/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTE1OSwiYXVkIjoidCIsInN1YiI6ImFqVVcwMGZvM1lmellwaHFFUVNFU3FKeDNOOTQwMVVrMDB0In0.gnXsatirv_Gw02IiBvmf8C7h34MiuIkR-XsN8nHf_m_XIVLyKxtNv9s4HxGmGVdSNVWesH6n04LrvYH-MP2iCWHdwRoV5aPznqlKmsR1LI_0ofhOm86hF1ss9UATzVRAbBWRsQOznMriLHhy5SAJgtTpJNfylpiDCrUC6ixS8Gd_KCgjird4dsz-tOJjt3qeduTs2bdoVIt5UOmUJb0tkvEiplYt4xymkaEdgDs2OuaHnOPVGCI1v-jPWFc9yyO0hzFjPLTmmPyo41NKbuOw1TsFYIKKViCxu2COKGVN1jPIxHjwECsY93aASdRs9xjlYwRmlRjC8P-Ej_wk7VZs1w",
    description:
      "A still shot of a man with a walking stick, walking past a cat. ",
    views: "6521",
    user: "Bob Vance",
    category: "Cat",
    src: "https://storage.coverr.co/videos/ajUW00fo3YfzYphqEQSESqJx3N9401Uk00t/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Feeding a black dog",
    thumbnail:
      "https://image.mux.com/VEotgIEy5puqYUwx00zrSqCN01zNFNgs96/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTIwMiwiYXVkIjoidCIsInN1YiI6IlZFb3RnSUV5NXB1cVlVd3gwMHpyU3FDTjAxek5GTmdzOTYifQ.Fy-AI7GKa5cZ_3l1kDwHy-vTC46222BHwpdsh8e4lMV7CoAnBj3dSyLOm6CBDCLLAN64IEX8pMy9_7YcVj0j7jX98bdqT8HoDhDl8UJSYfZ0mBbCUlUlsyt6INoHpuhUIBQ5jTZlT0jbGHal0x93KHAMI4Ilh3UBwW45AgsUDTjJsCARNFM3Qo3gFkce0UGonO1RPFfS9hyNdH3fZe40Apa0gf9kbG81NOSYyn6ONUvvMRI8C5LtEl_W204qlnHQeWg2G4y07s4MlsPUIFD7P0C6lN4p01J_eFYZkO2VBUR-BzZY8elvmeFmSd6MccMlwzZwhjelFjwR9m7Jwf0Q4A",
    description: "A still shot of someone feeding a black dog a treat. ",
    views: "5647",
    user: "Baek Yi Jin",
    category: "Dog",
    src: "https://storage.coverr.co/videos/VEotgIEy5puqYUwx00zrSqCN01zNFNgs96/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Stray dog eating food",
    thumbnail:
      "https://image.mux.com/uyc11do402wB1wJvkhEU1Aqlx01Unh4Z42/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTE4MiwiYXVkIjoidCIsInN1YiI6InV5YzExZG80MDJ3QjF3SnZraEVVMUFxbHgwMVVuaDRaNDIifQ.Ji3uEhvEFq7aOhLE6GkNm1GO89CPceIuDOlN3FZNu-MAabnJzVEHgDIVIrLMvsa4-uL7ge8ZwpW3fvfffnndPfiB9rQLKMQgOOztplGaK2CV0L3S5l9Jd4uvPUkHU-tx0epPc0kXDJMGHui63pN3tDWWtbgpXIVB6izXV3GC33phYnxHqfeKGyf5WqCOMOAIqdSrWpOz9WWcf00Aihu_s96LoDIqR5FMVV2MNdltXd6ZfIAsTZOBbMGhsVV3GQ57xXkRL95BomuqEQVtlRi6C1Cyp1BV5svMeBBYeFege001fN3RYiQ6ze8nxvPgjd_sB9_Czg1qrZOhlo3Az545Yw",
    description: "Still shot of a stray dog eating food. ",
    views: "2587",
    user: "Penny",
    category: "Dog",
    src: "https://storage.coverr.co/videos/uyc11do402wB1wJvkhEU1Aqlx01Unh4Z42/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Dog in a shelter",
    thumbnail:
      "https://image.mux.com/D21cixFJ02KVWdTZ5Av00lf9O001ss5Vm6o/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTM3NiwiYXVkIjoidCIsInN1YiI6IkQyMWNpeEZKMDJLVldkVFo1QXYwMGxmOU8wMDFzczVWbTZvIn0.ar8hxulk6MuayOo1k-LYffZq3CyCtNSCnDms-jyBJftjcfyV-ayctpmqO917vtzeJPebUj0w6o8JVAX1bLjqmsa-09a1qBUSSzW4lGSCtePChiB2w62zdXjz2ud-7B3GIm6rtT9J0q88qlsR47SxGGRrOxrNPGuMi9HypdF3uoPx4h4xWh27dxN3GsOoMbwgmj7bAIG_Kxk-CBjW9EoSrEQBY2UzUqVVUzXS5Oep_NmryE2Wh1sbr16lLEQaD9j07plDqf8UCsOiP5koqWNMQ3isWCLDoHHmP0yvM0s6mfVk-u2LO-T8GVMfR7zSGwh9m5dmv2eu2UPDXUepSCxBMw",
    description: "Still shot of a dog in a shelter. ",
    views: "4529",
    user: "Na Hee Do",
    category: "Dog",
    src: "https://storage.coverr.co/videos/D21cixFJ02KVWdTZ5Av00lf9O001ss5Vm6o/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Dog with a red leash",
    thumbnail:
      "https://image.mux.com/NfaVQlIzY6WKt13MKGbd2FOwjQlZsZGM/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTA5OCwiYXVkIjoidCIsInN1YiI6Ik5mYVZRbEl6WTZXS3QxM01LR2JkMkZPd2pRbFpzWkdNIn0.pWNLvq_nLiE0BhDWD02hhYXGfJHEycuqynkLwxim352ECw6EMgGoV20UcYj4szE5TiiFg2zZJZw6wRRYu3ZIdgPStMTuVyXSldM9n8T-AEpUdBkzNNBbLqkr8ZwOuQIMLfDKqL-LBdfWOr2dSof6BJbNlaCPu4ERxPw5Bnf9XkS59fxHvKpwWHIhCQAF1LP5nGWYWf8vvIN8Ti0SUZWVP46jeNXI-ydfsgOaF5DW8I-Z9lJHxmRu8o3TaqnJgwt5x7tAIKbjMbuT4XdbQ-0O_gxqn4VBYxEyg9VJm6RmrJW5cBigz8QFV0116AwlcX2AwDPLJMOF_ctUuLSH27MBWw",
    description: "Still shot of a cute dog with a red leash. ",
    views: "2569",
    user: "Manila",
    category: "Dog",
    src: "https://storage.coverr.co/videos/NfaVQlIzY6WKt13MKGbd2FOwjQlZsZGM/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Dogs walking in the jungle",
    thumbnail:
      "https://image.mux.com/Pqm007UpVmqAIs9wgECTwkMbpSC00d3NZ4/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTA2MSwiYXVkIjoidCIsInN1YiI6IlBxbTAwN1VwVm1xQUlzOXdnRUNUd2tNYnBTQzAwZDNOWjQifQ.H3rzYaKj0D1vpCzV2bcGiZRV1on4cp8abvYaFed43E6rnFYP0nVyAwHGIC7t1lkRwotuCigXjTOLfuZ1Ac_H9KMN54pR6JQbrVETuswZG9F8zSrcX7ZyTsMJ_-iB17MBns8Sr6B1e7jvIkVpc1T5pzPGvOCjPF4-M1yRBC0-FhSXmcJPLzA-HE2YAh2V0dcAxT9Uh414BcXHDzrVYVGjGf48OHP6TMasC1w6Uq29W161V2yMB09WMOME4tLwX8gSW84da4178_ZtA7Xuwa9h0ydjghNrLjLtosJDgoDhCXR3B00FW1lSZlDZhiQoK7ls6o-ecfd9Y101MUieIWn3tw",
    description: "Slow-motion shot of two dogs walking in the jungle. ",
    views: "4123",
    user: "Kelly Kapoor",
    category: "Dog",
    src: "https://storage.coverr.co/videos/Pqm007UpVmqAIs9wgECTwkMbpSC00d3NZ4/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Dog staring at a latte",
    thumbnail:
      "https://image.mux.com/N9Eqn2ydQSWIBxH7NMYorJGwMf39hdQU/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTI0NiwiYXVkIjoidCIsInN1YiI6Ik45RXFuMnlkUVNXSUJ4SDdOTVlvckpHd01mMzloZFFVIn0.hoo2AHJQjlLHyZO1-ZeQNc61M9Ii1gIIXMyi8-gEqvcB5yOAtmyA3QkZLUroHOA_oyURngc-2C4Pxms4V1ZvTDJxR7pxoH747zqRhDgoZbuRXsDtaEMQS9uPSKpRdeePyh3pjHoEF2kGcROKfK7LeOVVWnnvJ4MdmhpZs7a8ZzexS9WRqtvscy55X26RrRTgEmzNjFFkumazO0gqz-l2Ej8PGaab3VTY3qdjd5_mPWu1ALoQMa-foZcByd1f43h8-LGQHFluysJaExkfCa1CApKH1K34BykUiocghTj6nlDIUCT1lOf8DQyEYNiXfFjqrCtxj07rbzVaCpCQJHqNtA",
    description:
      "Close-up shot of a cute dog staring at a latte on the table. ",
    views: "1254",
    user: "Pondiac Bandit",
    category: "Dog",
    src: "https://storage.coverr.co/videos/N9Eqn2ydQSWIBxH7NMYorJGwMf39hdQU/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Woman and cat near the Christmas tree",
    thumbnail:
      "https://image.mux.com/02aQwRpvPIL93jl3z9ewYcFb1kqEkdkZo/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MDUzOCwiYXVkIjoidCIsInN1YiI6IjAyYVF3UnB2UElMOTNqbDN6OWV3WWNGYjFrcUVrZGtabyJ9.o3_wViEJaSqPqbcbxH9-9Rwvm8Wq7VhG6_wgYn1A-TjL8FHoZ4rVhF6rgl7jyaB8sk70g9fTbkRSneO9cndPJvwmXxDm7aYzyWwmqXI0mmjRgG8f4X2kjf3KpV_S7nqHhCNMMLtGXHW6pOSryaGnqyZ6qrvePPXxUUX7cTSaEqdOof3LBoLKdWTgzTHTG9REpeEW-HmKSJgkl73Hw73fhRSkL7C_ktafeTrzOUreXKy1EKCeFowY8JZ68dGhnut2nPdmrw1_OTWqv5ZQnsxZ9XgdAB8-d1qnaaiGFJ62WeclrqfUu43VcXfiI_TBBvPx8OpOC7X2os134Ef9Nbu0wg",
    description:
      "Slow-motion shot of a woman holding her cat near the Christmas tree. ",
    views: "8524",
    user: "Oscar Martinez",
    category: "Cat",
    src: "https://storage.coverr.co/videos/02aQwRpvPIL93jl3z9ewYcFb1kqEkdkZo/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Cat sitting on the street",
    thumbnail:
      "https://image.mux.com/ZWI9vdPcw313z01CcaqH5NGhMJ6WlB023o/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTUwNywiYXVkIjoidCIsInN1YiI6IlpXSTl2ZFBjdzMxM3owMUNjYXFINU5HaE1KNldsQjAyM28ifQ.mcRNvZaC5zj0vdLmbs1mfqVSUAaE992qw3eGSAcfWxfb96U_HGn1C636sZASVmF9A4nmoHxFa7b1P2BbGmwofWK8ojuGexeHBxdXOVNdLncUGRwWKjMupt3kmT3DtOUlDL9CriVdAGRSoYLAlPR9TgbC-RIh5NjYC8t26dPWR4Ck3swEA5LAJFTyOevOQyLQ-6iArucoStxKmV4FsQB7e_KE3bdCVhtk0kVxl_SrekNfPVKg7cj3HBxA7Kqhs3cmILdAFeeGL9mXqH52HIGppBHU6oaq4RHDtVOQwtRmgjzX6L1XmqLMjQJC5kKQp9rdZnEJPEpTQT-oh_NlOL5y6w",
    description:
      "A still shot of a grey cat sitting on the street as a couple walks in the background. \n",
    views: "7256",
    user: "Michael Scott",
    category: "Cat",
    src: "https://storage.coverr.co/videos/ZWI9vdPcw313z01CcaqH5NGhMJ6WlB023o/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Cat near a woman relaxing",
    thumbnail:
      "https://image.mux.com/nDoj1ssScD4s1oqKGTWDja9A6CbsDMIi/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTMwMiwiYXVkIjoidCIsInN1YiI6Im5Eb2oxc3NTY0Q0czFvcUtHVFdEamE5QTZDYnNETUlpIn0.k8Aqi65jTwDRdvLHEg-uLLzEBhelsOfiwS53EYHyFuMl_Lng4Y_bT5IyOSom035fqi916SlBrTgvwC4h4AqH2USxs5Bv50DrXh9u_CRYq3kpTwKKMUAPYllAdPo4fl7cBAOTXADSkiow0v2kOCIcmWoNgSO6rysv6R9jY4ViWcNIE6_m87HK44Wb_gyV2XfTXoQGv61q9D3bD_IubD-WKD7SQwjX1tyVTueKcdaLjhIQ6znvtmbJ2wDAUgVwX2mI7pqaMiYK-bw_6QLNgGdTUbw-vKDy5CxhEbiUys8VFN5XnjsffM8gQFj1TQc1aSvqF8Loozp5zXsCw0rvyvNbvA",
    description: "Still shot of a cat walking near a woman relaxing. ",
    views: "5412",
    user: "Steve Jobs",
    category: "Cat",
    src: "https://storage.coverr.co/videos/nDoj1ssScD4s1oqKGTWDja9A6CbsDMIi/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Girl touches a dog's nose",
    thumbnail:
      "https://image.mux.com/rebltEd017iHPDYQECmvlFwPcbGHNDa5F/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTMwOSwiYXVkIjoidCIsInN1YiI6InJlYmx0RWQwMTdpSFBEWVFFQ212bEZ3UGNiR0hORGE1RiJ9.iw-U-JvZvagfzLOFRevfyazkCfKPsx1yeU23fp2ms3sBmslwOV_ES3QOo6s8NkAgecERi0Z1uIGzOZH0X0--7gWdJ-_CVFM4XfKCcwFjty3gbhVy69zfUXQnLicXr4ZSjRqIqBqdY_8I0m8x5WFySIGGzrz2JrQ6KdMm7lLpfd2A7e0zLui9khNKu4lLzAt-D0WJhX4u2HoNmIRIF1biAX_grnfS-fFKjaIjakXu-J9eL6idCpJHlcvgaA9OShqZxorYSORfPpTwfteOIizP_DRQ9VuCsJW_o4LibKRX9QVaqMX5zb3nu0QmYHAmqOqxLF2qHlKJg-dQWmv7oefhYQ",
    description: "Still shot of a girl touching a dog's nose. ",
    views: "8562",
    user: "PB&J",
    category: "Dog",
    src: "https://storage.coverr.co/videos/rebltEd017iHPDYQECmvlFwPcbGHNDa5F/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "French Bulldog",
    thumbnail:
      "https://image.mux.com/QHJjMueZ5CJ6sv02AOMQKlyRznB201SlXH/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTIwMiwiYXVkIjoidCIsInN1YiI6IlFISmpNdWVaNUNKNnN2MDJBT01RS2x5UnpuQjIwMVNsWEgifQ.KxtTJbawMfxRoNa_CLOHW3v_ZyXXSQJGOtSdzafEj_uq15hmyedbUWosnRfWNUEXbORN_jdfNU7UkCjqzCLUotfaOS3kUAEs2734_Xd-SlLojccHjW7zdb0ve05SnDM-VHx0WiExNLOOvLCm7hZQZl-Dp_FikyYTL6FMY1R7Fpdm7H4PN8B17hG1ba985BdD8lLN2H443LkI4rFz4b1hKjF2cST9sX0OkUcEnOwUZ-sGOe7W-9_B2mOuK910TWGlS-U7DCQEb5wnvcQ59rdSbOPIabOAsH9urhLy40UkdtsqDgX4iFW0BpZcn7FAYQaw3z5Qk--KaBM47ltv4xbsQA",
    description:
      "Close-up shot of a black French Bulldog wearing a gold chain necklace.",
    views: "4562",
    user: "Ryan Howard",
    category: "Dog",
    src: "https://storage.coverr.co/videos/QHJjMueZ5CJ6sv02AOMQKlyRznB201SlXH/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "A black labrador",
    thumbnail:
      "https://image.mux.com/LK4YOp01WNaLSAB00y17zrwguaEEyPsWSG/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTE2MywiYXVkIjoidCIsInN1YiI6IkxLNFlPcDAxV05hTFNBQjAweTE3enJ3Z3VhRUV5UHNXU0cifQ.mZQbatqF4WkHWLNYNkMb_ewQ6Nt3VSScfqz82EYLZBfmFhvlYmR9VcuYMoPCeqSY9cY38SFJ-yOM-wskonCDOFEMJNWEXCX7-c1_DcmSGVLj7qYTgHvtfO2WSjvIOm41K9NqHLEqSURsEIi7dDzSP2kktHDMMwTyzZplTma_1aRLPwpNLD4dxOQ8CwMmfAcIe6QhHmKiJfQ8XLjNNdNmf9aR-XNBu0svsBo0IfDH8xOIKJtAvJ3o69bxTu9eyUR7JpQJkQSkwraDQt-tlRT36jCXVWuqD3oT9lBNt7_JdNH1GHsrQNSVOcrFqlUzWb2YbFvI6qpuCvxFxh7zTBtM-Q",
    description: "A close-up shot of a black labrador. ",
    views: "7569",
    user: "Gina Linetti",
    category: "Dog",
    src: "https://storage.coverr.co/videos/LK4YOp01WNaLSAB00y17zrwguaEEyPsWSG/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Man petting his dog on the couch",
    thumbnail:
      "https://image.mux.com/GRphyDUyZDU1WvqjjbmcrmDVS5ksr00sb/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTQwOSwiYXVkIjoidCIsInN1YiI6IkdScGh5RFV5WkRVMVd2cWpqYm1jcm1EVlM1a3NyMDBzYiJ9.XF2DimG_4qHGIDvWszS-2aWwTJTEKn3LSax_Vwjvwf_Mbf3anOI2yyFmemir6eh_UHy99fdVCoSby6N-CSuaMFkkgEA0M5DGtq_t0rG3nnlivGvtM51Vk6Gx1QOHBuztF5Y4bYIIas8CTCYPXR0LTmmKw5Da_9gzMlNUqJNlCeSrgF3ORlZWyF9CcH7ZLUhT88GERJuxpn31FVHfvt6gbq3D4yqcXNkWA21JUkAp9_MTBTGMpqxguFSEifL_W0dqCcfzMAFQkKuZWXYx99nkUkJbYw11P5692zuMRcr1rzdfuD21rvgMsf5jFJUB51C_Yj_cHBlcES9W08yAXENcGA",
    description: "High-angle shot of a man petting his dog on the couch. ",
    views: "5236",
    user: "Kevin",
    category: "Dog",
    src: "https://storage.coverr.co/videos/GRphyDUyZDU1WvqjjbmcrmDVS5ksr00sb/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Pink Chinese cat waving",
    thumbnail:
      "https://image.mux.com/m1vCto6Ujvo8Xa86NPS3ipI8n18AMD8I/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTEwNSwiYXVkIjoidCIsInN1YiI6Im0xdkN0bzZVanZvOFhhODZOUFMzaXBJOG4xOEFNRDhJIn0.Bkkz4jS03uzYRBS1K7AY1iEkIPnDmP7MLN34-xthiAR4kUff8izyXQ64OgOlAmSwWJOndww3X58VR2nHJYBB1fdc78p2ltsN5I9dN6sL9INv6BZIO0uOcumU_W2HQjtZn0aRS0YLlFm9JHLsLN1iprAEfsKTg19uiVE9m3mMgAXdhRfHf6PL0r0920-bP_aZbJT8hsnBwYquNmcJMY_50J-ISOgaTQJ4-8nN4_iG34v8L15nUgPIFp1xkvIZcrMr8Vq9C1cbUjDszV0PBEekr02kOlXw_Ojwz5yQGzipCVdeOcpfhzXRhxb4vcVkio2akOYaW7IrzGT2oJm8U_zZtg",
    description: "A close-up shot of a pink Chinese cat waving. ",
    views: "2156",
    user: "Chandler Bing",
    category: "Cat",
    src: "https://storage.coverr.co/videos/m1vCto6Ujvo8Xa86NPS3ipI8n18AMD8I/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "Dog in a kennel",
    thumbnail:
      "https://image.mux.com/EewyVCSL70001qVLFMBgUmkTLtznBycg5J/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTIyOSwiYXVkIjoidCIsInN1YiI6IkVld3lWQ1NMNzAwMDFxVkxGTUJnVW1rVEx0em5CeWNnNUoifQ.s0vFHtmINV1tf7RbrgnuIMYI2dwBh6Z6hX0qFiMruZtUR6l7U56KlILWV4xaeWsUcC3Xub5Gu_GU_8q1cCPOPVzfRMY6BIWDNuzin2xd0QC6DSwa1h8lYSmc2BhLQSx45Q6tKUcPArTy3ebXS-6glKzu0N5xs1sO4Zd93E9ne4khiTyNxFlJngA6g_7tGpYuOuo4pA9rckzDAy6sgclHNusPLVkTCoM_kqj0KxYBiKVtb13062DE5O46Gzn_6VHPABBzzx2JzKC-gyAulvH71mEZpConc4ao-HuSByy-_IqxoCKKoNAj2mNvgvPx6bHn3apftwHYyx8wHjdit1oEdg",
    description: "Still shot of a dog in a kennel. ",
    views: "3689",
    user: "Sheldon Cooper",
    category: "Dog",
    src: "https://storage.coverr.co/videos/EewyVCSL70001qVLFMBgUmkTLtznBycg5J/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Golden retriever chewing a toy",
    thumbnail:
      "https://image.mux.com/FXwfA8Vm7d9icPiTZWTKbge01CAl01Q02x01/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MDY3OCwiYXVkIjoidCIsInN1YiI6IkZYd2ZBOFZtN2Q5aWNQaVRaV1RLYmdlMDFDQWwwMVEwMngwMSJ9.pZE24QOfxFgINzJ6k3MwTJryLRnxVu00KK2i74RTZ4ITRAcDCu73dEZtjTHrnfPEDxwJH8IqKQ6r4afjYGg0m4QpriCr1wcIrsNw0RB5CxkbWJCXw--9tAOC5mJfpb7WZCxxR1lWW6y4HY9NjBJAKJkDPLl10moEctfcsTHVoR9nM6JEaWdCff8xpA-eUgWnnW3DBabtdx6uwxvhV7X9Tp659gxAoJPUlasjMy0PbnVPwkJGD_9kT04UPInXI0IoYCnCx1CqU4XhRQZ54lOhOnbqYMX-aNPLDv-d1yzgLl3ldrYGYWCBKBtXT2WoSnPxQB96exOMHchRHcogPki4rg",
    description:
      "Close-up shot of a golden retriever in the garden chewing a red toy. ",
    views: "1236",
    user: "Amy Santiago",
    category: "Dog",
    src: "https://storage.coverr.co/videos/FXwfA8Vm7d9icPiTZWTKbge01CAl01Q02x01/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1OTYyfQ.C4mQ_Dy6rNNUj6YXU2_7v_QOww1cn3KM3q44T8Rz0L4",
  },
  {
    _id: uuid(),
    title: "Cat in the grass",
    thumbnail:
      "https://image.mux.com/XRqHFNqz3ZOx8FzqrGUNNUUz1m01Cm3jK/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTE0NSwiYXVkIjoidCIsInN1YiI6IlhScUhGTnF6M1pPeDhGenFyR1VOTlVVejFtMDFDbTNqSyJ9.lmgnFjdHUNA9b27Rbffwim2Co0uTsqfwAWSk_JQhZX4fhlsal7DsUp5XX0GHuYBxw0-5T4fzElyY_f4HQ-fusYi7CG4cIochghJ9W9xfnbzSwlDIznm7Xkhc7tONb86tBGkWMRUDCC-tU55s8cbHsJHUYBzTKrJiscJRSQvbBVBz1AgO4rrCi95LYpmxn4O2J_vy6SkNuzXAdg9JF5rKEU2YGniaolvzSM_oCKfpJN8x1NKm0AgR6q_ujCrz2yaOYUA1B9Y2MJyhOoalNDW7RQ59SS1qgD5yzQCdhwNFOgCkm_o0txhWV2BCVu7iHLLyJm1XxKT45GvYlZSpgJc-yA",
    description:
      "Mid-shot of a cat sitting in the grass and observing its surroundings. ",
    views: "2632",
    user: "Regina Phalange",
    category: "Cat",
    src: "https://storage.coverr.co/videos/XRqHFNqz3ZOx8FzqrGUNNUUz1m01Cm3jK/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "A dog approaching a cat ",
    thumbnail:
      "https://image.mux.com/ZwbShoa7cHRdmoxKGWNAsRwey01hrnxYd/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTIxMSwiYXVkIjoidCIsInN1YiI6Ilp3YlNob2E3Y0hSZG1veEtHV05Bc1J3ZXkwMWhybnhZZCJ9.cDPXWAqiwa8GZjDSSgQkAwQgKQcG-ITsQnkH2_qKON9p6-H2UJRA5-5OSvSFk2b6wsRjSS_fsLlzYNJ3UELVXJPEEDfpZtMbdz1unPUkFrblYfUedhRKSgY4CDU3Mvdk4YwH4xALgBGR_3ATbVo7eEiuz8eMChfiiCxA-kWz0RbQyd_fb2oDrhCRiu11ZuoF8HbPw9aUYtHEc86HRXegrTwjPqbEIXV5QqeLVqhc0w-snflLbMoeHLXyiLGObZSGJ5VtCDTxZoQ46TSZ1_6A57hgRd-PqkzuFqkEJqLePj5erB0fpiNRbCm58HqC_qAIAt0iFDt1WpiEQMGvi-n2qQ",
    description:
      "A still shot of a dog and its owner approaching a cat sitting on a path ahead of them. ",
    views: "9654",
    user: "Janice",
    category: "Cat",
    src: "https://storage.coverr.co/videos/ZwbShoa7cHRdmoxKGWNAsRwey01hrnxYd/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
  {
    _id: uuid(),
    title: "A kitten yawning",
    thumbnail:
      "https://image.mux.com/HYiO01rDqsGLR8zHzB47pHpg6B017wPvJU/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI5MTIxMCwiYXVkIjoidCIsInN1YiI6IkhZaU8wMXJEcXNHTFI4ekh6QjQ3cEhwZzZCMDE3d1B2SlUifQ.WJBGn0Iijx2XcwiF2J-RNVcSoe0WCjXeCeUG6zXqsFDaurdQZCjm47Wrx-VFjRgYGVMSYuDDRT7-RBIDLUQrqOAGrcpB8mTacJp5D5SIdRLB4gWi9dQdppdPKsrVkqqAT-1ikA_r8s1pxr5OapDHppX7RtZgAYXHUkihNjknZI1da6ybU44Y2syO5QTbh4PVj0f6u4AfK1jSBeMFAw9kjzmwrMz_3o2wd-I8Qg1vM2OtkMjXhI4nGXypLBq2WYyyZWMeB_7AHHoF880rfWrt--QIHBDOqhW51WW3ovsCCyvOTF2hK1wS4EphUOdXcYaq_T5mUdobKa5RkpmecA-wvA",
    description: "Close-up shot of a kitten yawning. ",
    views: "3698",
    user: "Raymond Holt",
    category: "Cat",
    src: "https://storage.coverr.co/videos/HYiO01rDqsGLR8zHzB47pHpg6B017wPvJU/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjRDQzlGMzk4NEU5NzdCMkJDQUMwIiwiaWF0IjoxNjQ4MzI1NzgwfQ.uqeLSw6R49jDSO5S76-ITa5xQiPmVGjyHgfK0kRY20A",
  },
];
