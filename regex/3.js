const findSubCategory = str => {
    // const score = str.split(`/`);
    return str.split(`/`)[str.split(`/`).length-2];  
    //is it readable? maybe i should do it with variable?
}

test(findSubCategory("https://www.reddit.com/r/relationships/"), "relationships")
test(findSubCategory("https://www.reddit.com/r/mildlyinteresting/"), "mildlyinteresting")
test(findSubCategory("https://www.reddit.com/r/funny/"), "funny")
test(findSubCategory("https://www.reddit.com/r/CrappyDesign/"), "CrappyDesign")
test(findSubCategory("https://www.reddit.com/r/confession/"), "confession")
test(findSubCategory("https://www.reddit.com/r/AskMen/"), "AskMen")
test(findSubCategory("https://www.reddit.com/r/comics/"), "comics")
test(findSubCategory("https://www.reddit.com/r/lifehacks/"), "lifehacks")
test(findSubCategory("https://www.reddit.com/r/wholesomememes/"), "wholesomememes")
test(findSubCategory("https://www.reddit.com/r/iamverysmart/"), "iamverysmart")
test(findSubCategory("https://www.reddit.com/r/starterpacks/"), "starterpacks")
test(findSubCategory("https://www.reddit.com/r/awww/"), "awww")