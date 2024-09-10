import { createSlice } from "@reduxjs/toolkit";

// Carica lo stato dal sessionStorage, se esiste
const savedState = JSON.parse(sessionStorage.getItem("citiesState")) || {
  value: [
    {
      title: "Roma",
      isVisited: true,
      imgUrl:
        "https://media.istockphoto.com/id/509475506/it/foto/roman-citscape-panorama-al-tramonto-roma-italia.jpg?s=1024x1024&w=is&k=20&c=MTO5DpZiJrbDhNfGRdBJIq9nU0WV-Hqk13ojlMJbGwY=",
      description:
        "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam  tempore in, quo consequatur voluptatum error necessitatibus, harum numquam tenetur omnis odio. Error ea earum voluptate praesentium.",
    },
    {
      title: "Milano",
      isVisited: false,
      imgUrl:
        "https://media.istockphoto.com/id/687224330/it/foto/piazza-del-duomo-un-duomo-milano-allalba.jpg?s=1024x1024&w=is&k=20&c=SF9tMNGWcA6CEdPXnxz1zrE0eE-IBPTQCKZmNM6nMHw=",
      description:
        "2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam  tempore in, quo consequatur voluptatum error necessitatibus, harum numquam tenetur omnis odio. Error ea earum voluptate praesentium.",
    },
    {
      title: "Napoli",
      isVisited: false,
      imgUrl:
        "https://media.istockphoto.com/id/1097360124/it/foto/veduta-aerea-di-napoli-italia.jpg?s=1024x1024&w=is&k=20&c=4m9nKc8TTID0MK7q6JlfQniQz2Zs-NbxbEllr2s7FiU=",
      description:
        "3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam  tempore in, quo consequatur voluptatum error necessitatibus, harum numquam tenetur omnis odio. Error ea earum voluptate praesentium.",
    },
    {
      title: "Cagliari",
      isVisited: true,
      imgUrl:
        "https://media.istockphoto.com/id/528438369/it/foto/cagliari-italia-paesaggio-urbano.jpg?s=1024x1024&w=is&k=20&c=hvLNnBtUJsBE3Wr0OpAaOkEdotnMekOPiiUld0czI5s=",
      description:
        " 4Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam tempore in, quo consequatur voluptatum error necessitatibus, harum numquam tenetur omnis odio. Error ea earum voluptate praesentium.",
    },
  ],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState: savedState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
      sessionStorage.setItem("citiesState", JSON.stringify(state));
    },
  },
});

export const { add } = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
