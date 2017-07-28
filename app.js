  window.onload = function () {
                document.querySelector('#submit').onclick = function () {
                var input = document.querySelector('#pick_topic').value;

                var api = $.get('http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=API-KEY&limit=35')
                        .done(function (result) {
                            
                                for(var i=0;i< result.data.length;i++){
                                var div = document.querySelector('.image');
                                var img = document.createElement('img');
                                
                                img.src = result.data[i].images.original.url;
                                img.className = 'thumb col col-md-4 col-xs-12';
                                
                                div.appendChild(img);
                            }
                            });

                        };

            };