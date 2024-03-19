import { response } from "express"

const btnPrevDate = document.querySelector(".btn-prevDate")
const btnNextDate = document.querySelector(".btn-nextDate")
const btnAddShow = document.querySelector(".btn-addShow")
const myDate = document.querySelector(".myDate")
const bsOffCavas = new bootstrap.Offcanvas("#inputArea")
const newSet = document.querySelector(".newSet")
const updateSet = document.querySelector(".updateSet")
const form1 = document.querySelector("form")
const btnSend = document.querySelector(".btn-send")
// const lists = document.querySelectorAll(".list")
const btnUpdate = document.querySelectorAll(".btn-update")
const lists = document.querySelector(".lists")
const btnDel = document.querySelector(".btnDel")



myDate.addEventListener("change", e => {
   let date = e.currentTarget.value
   window.location.href = `/expe/d/${date}`
})

btnPrevDate.addEventListener("click", e => {
   let date = new Date(myDate.value)
   date.setDate(date.getDate() - 1)
   const dateString = date.toISOString().split("T")[0]
   window.location.href = `/expe/d/${dateString}`
})

btnNextDate.addEventListener("click", e => {
   let date = new Date(myDate.value)
   date.setDate(date.getDate() + 1)
   const dateString = date.toISOString().split("T")[0]
   window.location.href = `/expe/d/${dateString}`
})

btnAddShow.addEventListener("click", e => {
   document.querySelector("input[name=title]").value = ""
   document.querySelector("input[name=money]").value = ""
   document.querySelector("input[name=id]").value = ""
   document.querySelector("select").selectedIndex = 0
   newSet.classList.remove("d-none")
   newSet.classList.add("d-flex")
   updateSet.classList.add("d-none")
   updateSet.classList.remove("d-flex")
   bsOffCavas.show();
})

btnSend.addEventListener("click", e => {
   form1.submit();
})


//使用迴圈抓取並註冊Click事件
// lists.forEach((list) => {
//    list.addEventListener("click", e => {
//       let id = e.currentTarget.getAttribute("id")
//       let title = e.currentTarget.getAttribute("title")
//       let sort = e.currentTarget.getAttribute("sort")
//       let money = e.currentTarget.getAttribute("money")
//       document.querySelector("input[name=title]").value = title
//       document.querySelector("input[name=money]").value = money
//       document.querySelector("input[name=id]").value = id
//       document.querySelector("select").selectedIndex = sort
//       newSet.classList.add("d-none")
//       newSet.classList.remove("d-flex")
//       updateSet.classList.remove("d-none")
//       updateSet.classList.add("d-flex")
//       bsOffCavas.show()
//    })
// })

lists.addEventListener("click", e => {
   const clip = e.target.closest(".list")
   if (!clip) {
      return false
   }

   let id = e.currentTarget.getAttribute("id")
   let title = e.currentTarget.getAttribute("title")
   let sort = e.currentTarget.getAttribute("sort")
   let money = e.currentTarget.getAttribute("money")
   document.querySelector("input[name=title]").value = title
   document.querySelector("input[name=money]").value = money
   document.querySelector("input[name=id]").value = id
   document.querySelector("select").selectedIndex = sort
   newSet.classList.add("d-none")
   newSet.classList.remove("d-flex")
   updateSet.classList.remove("d-none")
   updateSet.classList.add("d-flex")
   bsOffCavas.show()
})


btnUpdate.addEventListener("click", e => {
   let url = "/expe"
   const formData = new FormData(form1)
   //觀察表單物件的方法
   for (let p of formData.entires()) {
      console.log(key, value);
   }

   fetch(url, {
      method: "PUT",
      body: formData
   }).then(response => {
      return response.json()
   }).then(result => {
      // console.log(result)
      //result會是一個陣列，索引0是結果，索引1是欄位
      //UPDATE不會回傳影響欄位，故值為undefined
      if (result.result === true) {
         const date = myDate.value
         window.location.href = `/expe/d/${dateString}`
      } else {
         alert("修改錯誤")
      }
   }).catch((error) => {
      console.log(error)
   })
})

btnDel.addEventListener("click", e => {
   let url = "/expe"
   const formData = new FormData(form1)
   fetch(url, {
      method: "DELETE",
      body: formData
   }).then(response => {
      return response.json()
   }).then(result => {
      if (result.result === true) {
         const date = myDate.value
         window.location.href = `/expe/d/${dateString}`
      } else {
         alert("修改錯誤")
      }
   }).catch(error => {
      console.log(error);
   })
})