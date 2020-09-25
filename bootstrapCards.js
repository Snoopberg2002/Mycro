export default function CreateCards() {

    axios.get("comments")
    .then(res => {
      res.data.comments.forEach(comment => {
        let card = document.createElement("div");
        card.setAttribute("class", "userCard");
        card.innerHTML = bootstrapCard(comment);
      });
    })
    
    }
    
    const bootstrapCard = (data) => {
      return `<div class="cardBody"><h5 class="id">data.comment_id</h5><h5 class="title">data.comment_title</h5><h5 class="userId">data.user_id</h5><h5 class="userName">data.username</h5></div>`
    }