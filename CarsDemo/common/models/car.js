module.exports = function(Car) {


      Car.afterRemote('find', function(context,output,next){
        console.log(JSON.stringify(context.req.query.language));
        var language = context.req.query.language;
        //var cont = JSON.stringify(context.req);
        console.log("Language parameter is " + language);
        console.log("Number of records retrieved: " + context.result.length);

        if(language == "" || language == null || language == undefined || language == 'undefined')
        {
          language = 'en'
        }

        if(language != "en")
        {
             var ctx_result = context.result;
             function repeater(i){
               if (i<ctx_result.length){
                 //do asynch stuff (i) and in the callback increment i and call again the function
                 var text = ctx_result[i].description;
                 //console.log("string to translate: " + text);
                 Car.app.models.TranslationUtilities.translate("en",language,text,function(err,result){
                   if (err){
                     console.log(err);
                     next();
                   }else{
                     //console.log("result of translation: " + JSON.stringify(result));
                     ctx_result[i].description = result[0][0].translation;
                     ctx_result[i].description = ctx_result[i].description.replace("[", "");
                     ctx_result[i].description = ctx_result[i].description.replace("]", "");
                     //console.log("ctx_result set to: " + JSON.stringify(ctx_result));
                     repeater(i+1);

                   }
                 });
               }else{
                 next();
               }
             }
             repeater(0);
          }
          else
          {
            next();
          }

          //}


   });




};
