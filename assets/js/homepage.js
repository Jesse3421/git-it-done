var getUserRepos = function() {
    //format the github api url
    var apiUrl = "hhtps://api.github.com/users" + user + "/repos"

    //make a request to the URL
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
    console.log(data)
  })
})
}
console.log("outside")
    var response = fetch("https://api.github.com/users/octocat/repos")
console.log(response)

getUserRepos()
