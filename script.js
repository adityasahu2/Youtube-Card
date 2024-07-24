function isAlpha(item) { return item.toUpperCase() != item.toLowerCase() }
function input() {
    while (true) {
        title = prompt("Enter title of the video")
        if (title == null) return
        if (title.length == 0) alert("Please enter a valid title")
        else break
    }
    while (true) {
        try {
            duration = prompt("Enter duration of the video (format = hh:mm:ss or mm:ss)")
            if (duration == null) return
            if (duration.length == 0) alert("Please enter a valid duration")
            else {
                timeArr = duration.split(":")
                if (timeArr.length == 1 || timeArr.length > 3) alert("Please enter a valid duration")
                else {
                    if (timeArr.length == 2) timeArr.unshift("00")
                    if (isAlpha(timeArr[0]) || isAlpha(timeArr[1]) || isAlpha(timeArr[2]) || timeArr[0] < 0 || timeArr[1] < 0 || timeArr[2] < 0 || timeArr[1] > 60 || timeArr[2] > 60) alert("Please enter a valid duration")
                    else break
                }
            }
        } catch (err) {
            alert("Please enter a valid duration")
        }
    }
    while (true) {
        try {
            views = prompt("Enter views of the video in format")
            if (views == null) return
            if (isAlpha(views) || views < 0) alert("Please enter a valid views")
            else {
                if (views >= 1000000000) views = (views / 1000000000).toFixed(1) + "B"
                else if (views >= 1000000) views = (views / 1000000).toFixed(1) + "M"
                else if (views >= 1000) views = (views / 1000).toFixed(0) + "K"
                break
            }
        } catch (err) {
            alert("Please enter a valid views")
        }
    }
    while (true) {
        try {
            months = prompt("Enter months old in format")
            if (months == null) return
            if (isAlpha(months) || months.length == 0) alert("Please enter a valid months old")
            else {
                if (months >= 12) {
                    months = Math.floor(months / 12)
                    if (months > 1) months += " years"
                    else months += " year"
                }
                else months += " months"
                break
            }
        } catch (err) {
            alert("Please enter a valid months old")
        }
    }
    thumbnail = prompt("Enter thumbnail url of the video")
    if (thumbnail == null) return
    creatCard(title, duration, views, months, thumbnail)
}

function creatCard(title, duration, views, months, thumbnail) {
    let parent = document.getElementById("cards")
    left = 180 - duration.length * 5
    let code = `<div class="flex"><div class="item" id="item1">${parent.children.length + 1}</div><div class="item" id="item2"><div class="thumbnail"><img src="${thumbnail}" alt="thumbnail"><span class="timeline"><p style="left : ${left}px ;">${duration}</p></span></div><div class="details"><div class="title">${title}</div><div class="video-details"><div class="channel vd-child"><a href="https://www.youtube.com/@CodeWithHarry">CodeWithHarry</a></div><div class="separator vd-child"> • </div><div class="views vd-child">${views} views</div><div class="separator vd-child"> • </div><div class="time vd-child">${months} ago</div></div></div></div><div class="item" id="item3"><img src="3-dot.svg" alt="menu"></div></div>`
    parent.insertAdjacentHTML("beforeend", code)
}

document.getElementById("add").addEventListener("click", function () { input() })

function remove() {
    let cards = document.getElementById("cards").children
    if (cards.length == 0) {
        alert("No more cards to remove")
        return
    }
    while (true) {
        try {
            let index = prompt("Enter the card  you want to remove")
            if (index == null) return
            if (isAlpha(index) || index < 0 || index > cards.length) alert("Please enter a valid card ")
            else {
                cards[index - 1].remove()
                if (cards.length != 0) {
                    for (let i = index; i <= cards.length; i++) {
                        console.log(cards[i - 1].firstElementChild.textContent)
                        cards[i - 1].firstElementChild.textContent = i
                    }
                }
                break
            }
        } catch (err) {
            alert("Please enter a valid card ")
        }
    }
}

document.getElementById("remove").addEventListener("click", function () { remove() })