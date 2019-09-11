(() => {
//let key = "&units=metric&APPID=a7e2d9ef998da83a537f356def67d0ec";
    let input = document.getElementById("input");
    let country = document.getElementById('country-code');
// let url = "https://api.openweathermap.org/data/2.5/forecast?q=";
    document.getElementById("run").addEventListener("click", function () {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "," + country.value + "&units=metric&APPID=a7e2d9ef998da83a537f356def67d0ec")
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);

                let today = new Date().toDateString();
                let day1 = new Date();
                day1.setDate(day1.getDate()+1);
                day1 = day1.toDateString();

                let day2 = new Date();
                day2.setDate(day2.getDate()+2);
                day2 = day2.toDateString();

                let day3 = new Date();
                day3.setDate(day3.getDate()+3);
                day3 = day3.toDateString();


                let day4 = new Date();
                day4.setDate(day4.getDate()+4);
                day4 = day4.toDateString();

                let listDay0 = [];
                let listDay1 = [];
                let listDay2 = [];
                let listDay3 = [];
                let listDay4 = [];

            data.list.forEach(function(item){
                let dateList = new Date(item.dt_txt).toDateString();
                console.log(dateList);
                if(dateList === today){
                    listDay0.push(item)
                } else if(dateList === day1 ){
                    listDay1.push(item)
                } else if(dateList === day2 ){
                    listDay2.push(item)
                } else if(dateList === day3 ){
                    listDay3.push(item)
                } else if(dateList === day4 ){
                    listDay4.push(item)
                }
            });

            console.log("listDay0", listDay0);
            console.log("listDay1", listDay1);
            console.log("listDay2", listDay2);
            console.log("listDay3", listDay3);
            console.log("listDay4", listDay4);


            /* to make the function getAvgTemp tried
               let sum=0;
                for(let i=0; i < listDay1.length; i++){
                    sum += listDay1[i].main.temp;
                }
                console.log("sum",sum);
                let avgTemp = sum / listDay1.length;
                console.log("avgTemp", avgTemp);*/
            console.log("avgTempFunction", getAvgTemp(listDay1));
            console.log("avgTempFunction", getAvgTemp(listDay2));
            console.log("avgTempFunction", getAvgTemp(listDay3));
            console.log("avgTempFunction", getAvgTemp(listDay4));


            console.log(listDay1.length);


            function getAvgTemp(list){
                let sum=0;
                for(let i=0; i < list.length; i++){
                    sum += list[i].main.temp;
                }
                return Math.round(sum / list.length);
            }













            let temp = data.list[0].main.temp; //e cogido del data lo que necesitava y si miramos en la consola veremos porque en ese metodo

                document.getElementsByClassName("card-title city1")[0].innerHTML = input.value;
                document.getElementsByClassName("card-title city2")[0].innerHTML = input.value;
                document.getElementsByClassName("card-title city3")[0].innerHTML = input.value;
                document.getElementsByClassName("card-title city4")[0].innerHTML = input.value;
                document.getElementsByClassName("card-title city5")[0].innerHTML = input.value;



                document.getElementsByClassName("card-text")[0].innerHTML = temp + "°" ;
                document.getElementsByClassName("card-text")[1].innerHTML = getAvgTemp(listDay1) + "°";
                document.getElementsByClassName("card-text")[2].innerHTML = getAvgTemp(listDay2) + "°";
                document.getElementsByClassName("card-text")[3].innerHTML = getAvgTemp(listDay3) + "°";
                document.getElementsByClassName("card-text")[4].innerHTML = getAvgTemp(listDay4) + "°";

                let description = data.list[0].weather[0].description;

                document.getElementsByClassName("description")[0].innerHTML = description ;
                document.getElementsByClassName("description")[1].innerHTML = description ;
                document.getElementsByClassName("description")[2].innerHTML = description ;
                document.getElementsByClassName("description")[3].innerHTML = description ;
                document.getElementsByClassName("description")[4].innerHTML = description ;

                let icon = data.list[0].weather[0].icon;



                let img1 = document.getElementById("pic1");
                img1.src = "http://openweathermap.org/img/wn/"+ icon +".png";

                let img2 = document.getElementById("pic2");
                img2.src = "http://openweathermap.org/img/wn/"+ icon +".png";

                let img3 = document.getElementById("pic3");
                img3.src = "http://openweathermap.org/img/wn/"+ icon +".png";

                let img4 = document.getElementById("pic4");
                img4.src = "http://openweathermap.org/img/wn/"+ icon +".png";

                let img5 = document.getElementById("pic5");
                img5.src = "http://openweathermap.org/img/wn/"+ icon +".png";





                console.log(img1);
                //document.getElementsByClassName("icon")[0].innerHTML = icon ;







            })



    });
})();
