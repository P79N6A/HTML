; (function () {

    var ytemplateIDs = [];
    var templates = document.getElementsByClassName("template");
    ytemplateIDs = getDOM_Prpperties(templates, "id");
    //For each data block
    for (j = 0; j < ytemplateIDs.length; j++) {

        var data = var_data[ytemplateIDs[j]];
        var template = document.getElementById(ytemplateIDs[j]).innerHTML;
        var result = document.getElementById(ytemplateIDs[j]);
        var yAllDataProperties = [];
        fragment = '', temp = "";

        //Für each data Entry
        for (i = 0; i < data.length; i++) {
            var yDataProperties = Object.getOwnPropertyNames(data[i])

            temp = template
            //For each data Property
            for (k = 0; k < yDataProperties.length; k++) {
                //Replace {{}} statement with corresponding data Property
                temp = temp.replace(new RegExp("{{" + yDataProperties[k] + "}}", 'g'), data[i][yDataProperties[k]])
                //Remember Data Property for *01
                if (!yAllDataProperties.includes(yDataProperties[k])) {
                    yAllDataProperties.push(yDataProperties[k])
                }
            }
            // Add template to HTML fragement for 1x Data Entry
            fragment += temp
        }
        //*01: Now check if a {{}} statement is left in template and delete it
        for (k = 0; k < yAllDataProperties.length; k++) {
            fragment = fragment.replace(new RegExp("{{" + yAllDataProperties[k] + "}}", 'g'), "")
        }   
        //Add all data entries to HTML block
        result.innerHTML = fragment;

    }
})();


function getDOM_Prpperties(DOM_objects, DOM_Property) {
    var array = []
    for (i = 0; i < DOM_objects.length; i++) {
        array.push(DOM_objects[i][DOM_Property])
    }
    return array;
};