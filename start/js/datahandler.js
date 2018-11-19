// ##############################################################################################################
// Description:
// Applies to all DOM Elements of class="datahandler-root".
// will iterativly put in the value of every object key of the linked js data
//
// for example: 
// var daten = {"Start": ["url":"www.google"},{"url":"www.facebook"}]}
//
// <div id="Start" class="datahandler-root">
//  {{url}}
// </div>
//
// will output:
// <div id="Start" class="datahandler-root">
// www.google
// www.facebook
// </div>
// ##############################################################################################################


//Parameters
var var_data = data01; // Link to external js object


//On Window Load:
function datahandler_main() {
    var divs_root = document.getElementsByClassName("datahandler-root"); // apply to all DOMs of this class
    //var var_DatahandlerRootIDs = [];
    //var_DatahandlerRootIDs = getDOM_Prpperties(divs_root, "id");
    var var_DatahandlerRootIDs = getDOM_Prpperties(divs_root, "id");
    //For each div of class "datahandler-root"
    for (j = 0; j < var_DatahandlerRootIDs.length; j++) {

        var var_CurrentDataBlock = var_data[var_DatahandlerRootIDs[j]];
        var var_template_innerHTML = document.getElementById(var_DatahandlerRootIDs[j]).innerHTML;
        var var_template_div = document.getElementById(var_DatahandlerRootIDs[j]);
        var var_template_ClassTags = getTagsfromClass(var_template_div.classList);
        var var_AllDataProperties = [];
        var var_TagMatchTRUE = true;
        
        var fragment = '';
        var temp = "";

        
        //For each Data Item
        for (i = 0; i < var_CurrentDataBlock.length; i++) {
            
            // NEXT:
            //-------------------------------------------------------------
            // die beiden ausdrücke unten vergleichen und bedingtes template zu erhalten
            // default verhalten ohne Tags: befülle template mit allen daten
            //var a = var_CurrentDataBlock[i]["Tags"][0]  ->ok
            //var b = var_template_ClassTags[0]v->ok
            // 
            //plus: Änderungen nach Initversuch nachpflegen

            //var_TagMatchTRUE false when template has Tag classes (now you have to match class tag in data)
            //true again when one Tag in data item and in template matches
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

            //var a = var_CurrentDataBlock[i]["Tags"][0]  ->ok
            //var b = var_template_ClassTags[0]->ok