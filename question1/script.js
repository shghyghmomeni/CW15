// Setting DOM to all boxes or input field
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
b4 = document.getElementById("b4");
b5 = document.getElementById("b5");
b6 = document.getElementById("b6");
b7 = document.getElementById("b7");
b8 = document.getElementById("b8");
b9 = document.getElementById("b9");

//flags
let b1_flag = 0,
  b2_flag = 0,
  b3_flag = 0,
  b4_flag = 0,
  b5_flag = 0,
  b6_flag = 0,
  b7_flag = 0,
  b8_flag = 0,
  b9_flag = 0;

let end_flag = 0;

// User onclick functions
function myfunc_1() {
  b1.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b1_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}
function myfunc_2() {
  b2.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b2_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}
function myfunc_3() {
  b3.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b3_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}
function myfunc_4() {
  b4.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b4_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}
function myfunc_5() {
  b5.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b5_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}
function myfunc_6() {
  b6.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b6_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}
function myfunc_7() {
  b7.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b7_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}
function myfunc_8() {
  b8.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b8_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}
function myfunc_9() {
  b9.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="#545454"
  class="close-svg"
  viewBox="0 0 16 16"
  >
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
  </svg>`;
  b9_flag = 1;
  end();
  if (end_flag == 0) {
    computerChoice();
  }
}

// computer function
function getRndInteger(min = 1, max = 10) {
  let randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (eval(`b${randomNum}_flag`) == 0) {
    let temp = `b${randomNum}_flag`;
    eval(temp + "=" + 2);
    // console.log(randomNum);
    return randomNum;
  } else {
    return getRndInteger();
  }
}

function end() {
  let count = 0;
  for (let i = 1; i < 10; i++) {
    let flagName = `b${i}_flag`;
    if (eval(flagName + ">" + 0)) {
      count++;
    }
  }
  if (count == 9) {
    end_flag = 1;
    console.log("nobody win!!");
  }
  if (
    (b1_flag == 1 && b2_flag == 1 && b3_flag == 1) ||
    (b4_flag == 1 && b5_flag == 1 && b6_flag == 1) ||
    (b7_flag == 1 && b8_flag == 1 && b9_flag == 1) ||
    (b1_flag == 1 && b5_flag == 1 && b9_flag == 1) ||
    (b3_flag == 1 && b5_flag == 1 && b7_flag == 1) ||
    (b1_flag == 1 && b4_flag == 1 && b7_flag == 1) ||
    (b2_flag == 1 && b5_flag == 1 && b8_flag == 1) ||
    (b3_flag == 1 && b6_flag == 1 && b9_flag == 1)
  ) {
    end_flag = 1;
    console.log("you win!!");
  }
  if (
    (b1_flag == 2 && b2_flag == 2 && b3_flag == 2) ||
    (b4_flag == 2 && b5_flag == 2 && b6_flag == 2) ||
    (b7_flag == 2 && b8_flag == 2 && b9_flag == 2) ||
    (b1_flag == 2 && b5_flag == 2 && b9_flag == 2) ||
    (b3_flag == 2 && b5_flag == 2 && b7_flag == 2) ||
    (b1_flag == 2 && b4_flag == 2 && b7_flag == 2) ||
    (b2_flag == 2 && b5_flag == 2 && b8_flag == 2) ||
    (b3_flag == 2 && b6_flag == 2 && b9_flag == 2)
  ) {
    end_flag = 1;
    console.log("computer wins!!");
  }
}

function computerChoice() {
  let choiceNum = getRndInteger(1, 10);
  switch (choiceNum) {
    case 1:
      b1.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#ffffff"
      class="circle-svg"
      viewBox="0 0 16 16"
      >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      </svg>`;
      break;

    case 2:
      b2.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#ffffff"
      class="circle-svg"
      viewBox="0 0 16 16"
      >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      </svg>`;
      break;

    case 3:
      b3.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#ffffff"
        class="circle-svg"
        viewBox="0 0 16 16"
        >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        </svg>`;
      break;

    case 4:
      b4.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ffffff"
          class="circle-svg"
          viewBox="0 0 16 16"
          >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          </svg>`;
      break;

    case 5:
      b5.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            class="circle-svg"
            viewBox="0 0 16 16"
            >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            </svg>`;
      break;

    case 6:
      b6.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              class="circle-svg"
              viewBox="0 0 16 16"
              >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              </svg>`;
      break;

    case 7:
      b7.innerHTML = `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                class="circle-svg"
                viewBox="0 0 16 16"
                >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                </svg>`;
      break;

    case 8:
      b8.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  class="circle-svg"
                  viewBox="0 0 16 16"
                  >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  </svg>`;
      break;

    case 9:
      b9.innerHTML = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    class="circle-svg"
                    viewBox="0 0 16 16"
                    >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    </svg>`;
      break;
  }
  end();
}
