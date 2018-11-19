// ##############################################################################################################
// Description:
// <div id="Start" class="datahandler-root">
//  {{url}}
// </div>
//
// will output:
// <div id="Start" class="datahandler-root">
// www.google.de
// www.facebook.de
// </div>
// ##############################################################################################################


//parameters
var var_data = Object.assign(data01); // link to external object list

//on window load:
function main_datahandler() {
    var array_DatahandlerDivsID = getDOM_Prpperties(document.getElementsByClassName("datahandler-root"), "id");

    for (j = 0; j < array_DatahandlerDivsID.length; j++) {
        var var_CurrentDataBlock = var_data[array_DatahandlerDivsID[j]];
        var var_template_innerHTML = document.getElementById(array_DatahandlerDivsID[j]).innerHTML;
        var var_template_div = document.getElementById(array_DatahandlerDivsID[j]);
        var var_template_ClassTags = getTagsfromClass(var_template_div.classList);
        var var_AllDataProperties = [];
        var var_TagMatchTRUE = true;
        
        var fragment = '';
        var temp = "";

        
        //For each Data Item
        for (i = 0; i < var_CurrentDataBlock.length; i++) {
            if (!(var_template_ClassTags == undefined || var_template_ClassTags.length == 0) ) {
                var_TagMatchTRUE = false;   
                if (var_CurrentDataBlock[i]["Tags"] != undefined) {
                    var_TagMatchTRUE = IsThereEqualTag(var_CurrentDataBlock[i]["Tags"],var_template_ClassTags);
                }
            }

            if (var_TagMatchTRUE) {
                var var_DataProperties = Object.getOwnPropertyNames(var_CurrentDataBlock[i]); // Next: keine Tags

                temp = var_template_innerHTML
                //For each Data Item Key
                for (k = 0; k < var_DataProperties.length; k++) {
                    //Replace {{}} statement with corresponding data Property
                    temp = temp.replace(new RegExp("{{" + var_DataProperties[k] + "}}", 'g'), var_CurrentDataBlock[i][var_DataProperties[k]])
                    
                    //Remember Data Properties
                    if (!var_AllDataProperties.includes(var_DataProperties[k])) {
                        var_AllDataProperties.push(var_DataProperties[k])
                    }
                }
                // Add template to HTML fragement for 1x Data Entry
                fragment += temp;
            }
        }

        // Now check if a {{}} statement is left in template and delete it
        for (k = 0; k < var_AllDataProperties.length; k++) {
            fragment = fragment.replace(new RegExp("{{" + var_AllDataProperties[k] + "}}", 'g'), "")
        }   
        //Add all data entries to HTML block
        var_template_div.innerHTML = fragment;

    }
};


function getDOM_Prpperties(DOM_objects, DOM_Property) {
    var array = []
    for (var i = 0; i < DOM_objects.length; i++) {
        array.push(DOM_objects[i][DOM_Property])
    }
    return array;
};

function getTagsfromClass(classlist) {
    var Tag_list = [];
    for (var i = 0;i< classlist.length;i++) {
        if (classlist[i].includes("[")) {
            Tag_list.push(classlist[i].replace("[","").replace("]",""));
        }
    }
    return Tag_list;
};

function IsThereEqualTag(Taglist1, Taglist2) {
    for (var i = 0;i<Taglist1.length;i++) {
        for (var j = 0;j<Taglist2.length;j++) {
            if (Taglist1[i] == Taglist2[j]) {
                return true;
            }           
        }
    }
    return false;
}