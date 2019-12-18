const artworks = [
  { _id: "1", title: "In the event of sinking" },
  { _id: "2", title: "Refugees in a nutshell" },
  { _id: "3", title: "Solidarity" },
  { _id: "4", title: "The rehearsal" }
];

export function artWorkData(){
  return new Promise(function(res, rej){
    setTimeout(() => {
      res(artworks)
    }, 300)
  })
}