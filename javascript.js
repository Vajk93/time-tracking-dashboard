// i will learn the usage of json. Now i copy/paste the datas
const data = 
[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];
//console.log(data);


const dailyButton = document.getElementById('dailyBtn');
const weeklyButton = document.getElementById('weeklyBtn');
const monthlyButton = document.getElementById('monthlyBtn');


function showDailyValues(){
  let i = 0;
  while(i<6) {
    let sixBox = document.getElementById('the'+ i +'ofSixBox');
    // for less code: the 'i' in the first box is not '1', it is '0' - like data '[0]' index
    // the first box id is: #the0ofSixBox - second box id is: #the1ofSixBox...
    sixBox.innerHTML = `
        <p>${data[i].title}</p>
        <i class="fas fa-ellipsis-h"></i>
        <h1>${data[i].timeframes.daily.current}hrs</h1>
        <span>Previous - ${data[i].timeframes.daily.previous}hrs</span>
    `;
    i++;
  }
}

function showWeeklyValues(){
  let i = 0;
  while(i<6) {
    let sixBox = document.getElementById('the'+ i +'ofSixBox');
    sixBox.innerHTML = `
        <p>${data[i].title}</p>
        <i class="fas fa-ellipsis-h"></i>
        <h1>${data[i].timeframes.weekly.current}hrs</h1>
        <span>Previous - ${data[i].timeframes.weekly.previous}hrs</span>
    `;
    i++;
  }
}

function showMonthlyValues(){
  let i = 0;
  while(i<6) {
    let sixBox = document.getElementById('the'+ i +'ofSixBox');
    sixBox.innerHTML = `
        <p>${data[i].title}</p>
        <i class="fas fa-ellipsis-h"></i>
        <h1>${data[i].timeframes.monthly.current}hrs</h1>
        <span>Previous - ${data[i].timeframes.monthly.previous}hrs</span>
      `;
      i++;
  }
}


dailyButton.addEventListener('click', showDailyValues);
weeklyButton.addEventListener('click', showWeeklyValues);
monthlyButton.addEventListener('click', showMonthlyValues);


// if you firstly load the page, you should see something
showWeeklyValues();


