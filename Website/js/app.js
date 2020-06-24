var scales = { "Ionian (Major)": [0, 2, 4, 5, 7, 9, 11], "Dorian": [0, 2, 3, 5, 7, 9, 10], "Phrygian": [0, 1, 3, 5, 7, 8, 10], "Lydian": [0, 2, 4, 6, 7, 9, 11], "Mixolydian": [0, 2, 4, 5, 7, 9, 10], "Aeolian (Minor)": [0, 2, 3, 5, 7, 8, 10], "Locrian": [0, 1, 3, 5, 6, 8, 10], "Melodic Minor": [0, 2, 3, 5, 7, 9, 11], "Dorian \u266d9": [0, 1, 3, 5, 7, 9, 10], "Augmented Lydian": [0, 2, 4, 6, 8, 9, 11], "Lydian \u266d7": [0, 2, 4, 6, 7, 9, 10], "Mixolydian \u266d13": [0, 2, 4, 5, 7, 8, 10], "Locrian \u266e9": [0, 2, 3, 5, 6, 8, 10], "Altered": [0, 1, 3, 4, 6, 8, 10], "Harmonic Minor": [0, 2, 3, 5, 7, 8, 11], "Locrian \u266e13": [0, 1, 3, 5, 6, 9, 10], "Ionian \u266f5": [0, 2, 4, 5, 8, 9, 11], "Dorian \u266f11": [0, 2, 3, 6, 7, 9, 10], "Mixolydian (\u266d9,\u266d13)": [0, 1, 4, 5, 7, 8, 10], "Lydian \u266f9": [0, 3, 4, 6, 7, 9, 11], "Superlocrian \u266d\u266d7": [0, 1, 3, 4, 6, 8, 9], "Whole Tone": [0, 2, 4, 6, 8, 10], "Major Pentatonic": [0, 2, 4, 7, 9], "Minor Pentatonic": [0, 3, 5, 7, 10], "Major Blues": [0, 2, 3, 4, 7, 9], "Minor Blues": [0, 3, 5, 6, 7, 10], "Half Tone Whole Tone": [0, 1, 3, 4, 6, 7, 9, 10], "Whole Tone Half Tone": [0, 2, 3, 5, 6, 8, 9, 11], "Dominant Bebop": [0, 2, 4, 5, 7, 9, 10, 11], "Major Bebop": [0, 2, 3, 5, 7, 8, 9, 10] }

var chordstype={"M": [0, 4, 7], "(b5)": [0, 4, 6], "11": [0, 4, 5, 7, 10], "11#5": [0, 4, 5, 8, 10], "11b5": [0, 4, 5, 6, 10], "13": [0, 4, 7, 10, 9], "13#5": [0, 4, 8, 9, 10], "13b5": [0, 4, 6, 9, 10], "5": [0, 7], "6": [0, 4, 7, 9], "6b5": [0, 4, 6, 9], "7": [0, 4, 7, 10], "7#5": [0, 4, 8, 10], "7b5": [0, 4, 6, 10], "7sus2": [0, 2, 7, 10], "7sus4": [0, 5, 7, 10], "9": [0, 4, 7, 10, 2], "9#5": [0, 4, 8, 10, 2], "9b5": [0, 4, 6, 10, 2], "9sus2": [0, 2, 7, 10, 2], "9sus4": [0, 5, 7, 10, 2], "aug": [0, 4, 8], "aug6": [0, 4, 8, 9], "dim": [0, 3, 6], "dim(maj11)": [0, 3, 5, 6, 11], "dim(maj13)": [0, 3, 6, 9, 11], "dim(maj7)": [0, 3, 6, 11], "dim(maj9)": [0, 2, 3, 6, 11], "dim11": [0, 3, 5, 6, 10], "dim13": [0, 3, 6, 9, 10], "dim6": [0, 3, 6, 9], "dim7": [0, 3, 6, 9], "dim9": [0, 2, 3, 6, 10], "m": [0, 3, 7], "m#5": [0, 3, 8], "m(maj11)": [0, 3, 5, 7, 11], "m(maj11)#5": [0, 3, 5, 8, 11], "m(maj13)": [0, 3, 7, 9, 11], "m(maj13)#5": [0, 3, 8, 9, 11], "m(maj7)": [0, 3, 7, 11], "m(maj7)#5": [0, 3, 8, 11], "m(maj9)": [0, 2, 3, 7, 11], "m(maj9)#5": [0, 2, 3, 8, 11], "m11": [0, 3, 7, 10, 5], "m11#5": [0, 3, 5, 8, 10], "m13": [0, 3, 7, 10, 9], "m13#5": [0, 3, 8, 9, 10], "m6": [0, 3, 7, 9], "m6#5": [0, 3, 8, 9], "m7": [0, 3, 7, 10], "m7#5": [0, 3, 8, 10], "m7b5": [0, 3, 6, 10], "m9": [0, 3, 7, 10, 2], "m9#5": [0, 2, 3, 8, 10], "maj11": [0, 4, 5, 7, 11], "maj11#5": [0, 4, 5, 8, 11], "maj11b5": [0, 4, 5, 6, 11], "maj13": [0, 4, 7, 11, 9], "maj13#5": [0, 4, 8, 9, 11], "maj13b5": [0, 4, 6, 9, 11], "maj7": [0, 4, 7, 11], "maj7#5": [0, 4, 8, 11], "maj7b5": [0, 4, 6, 11], "maj9": [0, 4, 7, 11, 2], "maj9#5": [0, 2, 4, 8, 11], "maj9b5": [0, 2, 4, 6, 11], "sus2": [0, 2, 7], "sus2(#5)": [0, 2, 8], "sus2(b5)": [0, 2, 6], "sus4": [0, 5, 7], "sus4(#5)": [0, 5, 8], "sus4(b5)": [0, 5, 6]}

var tuningsDict = {"4-string": {"GCEA": {"tuning_array": ["G", "C", "E", "A"], "name": "Ukulele"}, "EADG": {"tuning_array": ["E", "A", "D", "G"], "name": "Standard"}, "DADG": {"tuning_array": ["D", "A", "D", "G"], "name": "Drop D"}, "D#G#C#F#": {"tuning_array": ["D#", "G#", "C#", "F#"], "name": "Half Step"}, "CGCF": {"tuning_array": ["C", "G", "C", "F"], "name": "Drop C"}, "GDAE": {"tuning_array": ["G", "D", "A", "E"], "name": "Violin Standard"}, "CGCE": {"tuning_array": ["C", "G", "C", "E"], "name": "Cigar Box Open C"}}, "5-string": {"EADGB": {"tuning_array": ["E", "A", "D", "G", "B"], "name": "Standard"}, "DADGB": {"tuning_array": ["D", "A", "D", "G", "B"], "name": "Drop D"}, "CGCFA": {"tuning_array": ["C", "G", "C", "F", "A"], "name": "Drop C"}}, "6-string": {"EADGBE": {"tuning_array": ["E", "A", "D", "G", "B", "E"], "name": "Standard"}, "DADGBE": {"tuning_array": ["D", "A", "D", "G", "B", "E"], "name": "Drop D"}, "CGCFAD": {"tuning_array": ["C", "G", "C", "F", "A", "D"], "name": "Drop C"}, "EBEG#BE": {"tuning_array": ["E", "B", "E", "G#", "B", "E"], "name": "Open E"}, "DADGAD": {"tuning_array": ["D", "A", "D", "G", "A", "D"], "name": "DADGAD"}, "DGDGBD": {"tuning_array": ["D", "G", "D", "G", "B", "D"], "name": "Open G"}, "DADF#AD": {"tuning_array": ["D", "A", "D", "F#", "A", "D"], "name": "Open D"}, "CADGBE": {"tuning_array": ["C", "A", "D", "G", "B", "E"], "name": "Neon"}, "FACECD": {"tuning_array": ["F", "A", "C", "E", "C", "D"], "name": "D minor 9"}, "EBEF#BE": {"tuning_array": ["E", "B", "E", "F#", "B", "E"], "name": "Somethings missing"}, "EADGAE": {"tuning_array": ["E", "A", "D", "G", "A", "E"], "name": "Asus4/7"}, "EADGCF": {"tuning_array": ["E", "A", "D", "G", "C", "F"], "name": "All Fourth"}, "ECDGAD": {"tuning_array": ["E", "C", "D", "G", "A", "D"], "name": "Andy Mckee"}, "GBDGBD": {"tuning_array": ["G", "B", "D", "G", "B", "D"], "name": "Dobro"}}, "7-string": {"BEADGBE": {"tuning_array": ["B", "E", "A", "D", "G", "B", "E"], "name": "Standard"}, "AEADGBE": {"tuning_array": ["A", "E", "A", "D", "G", "B", "E"], "name": "Drop A"}, "GDGCFAD": {"tuning_array": ["G", "D", "G", "C", "F", "A", "D"], "name": "Drop G"}, "ADGCFAD": {"tuning_array": ["A", "D", "G", "C", "F", "A", "D"], "name": "A Standard"}, "BDADGBE": {"tuning_array": ["B", "D", "A", "D", "G", "B", "E"], "name": "7-string drop D"}, "BD#BD#F#BD#": {"tuning_array": ["B", "D#", "B", "D#", "F#", "B", "D#"], "name": "Open B"}, "CABBAGE": {"tuning_array": ["C", "A", "B", "B", "A", "G", "E"], "name": "Cabbage"}, "GCGCGCE": {"tuning_array": ["G", "C", "G", "C", "G", "C", "E"], "name": "Devin Townsend"}, "F#BF#BF#BD#": {"tuning_array": ["F#", "B", "F#", "B", "F#", "B", "D#"], "name": "Deconstruction"}, "A#D#G#C#F#A#D#": {"tuning_array": ["A#", "D#", "G#", "C#", "F#", "A#", "D#"], "name": "A# Standard"}, "AEADF#BE": {"tuning_array": ["A", "E", "A", "D", "F#", "B", "E"], "name": "Alternate Drop A "}, "ADADGBE": {"tuning_array": ["A", "D", "A", "D", "G", "B", "E"], "name": "Drop A/D"}, "FA#FA#D#GC": {"tuning_array": ["F", "A#", "F", "A#", "D#", "G", "C"], "name": "Drop F/A#"}, "A#C#G#C#F#A#D#": {"tuning_array": ["A#", "C#", "G#", "C#", "F#", "A#", "D#"], "name": "Drop C#"}}, "8-string": {"F#BEADGBE": {"tuning_array": ["F#", "B", "E", "A", "D", "G", "B", "E"], "name": "Standard"}, "EBEADGBE": {"tuning_array": ["E", "B", "E", "A", "D", "G", "B", "E"], "name": "Drop E"}, "D#A#D#G#C#F#A#D#": {"tuning_array": ["D#", "A#", "D#", "G#", "C#", "F#", "A#", "D#"], "name": "Double Drop F"}, "FCFA#D#G#CF": {"tuning_array": ["F", "C", "F", "A#", "D#", "G#", "C", "F"], "name": "Drop F"}, "EAEADGBE": {"tuning_array": ["E", "A", "E", "A", "D", "G", "B", "E"], "name": "Drop E/A"}, "ADADGADG": {"tuning_array": ["A", "D", "A", "D", "G", "A", "D", "G"], "name": "Celtic"}, "GCGCGCEG": {"tuning_array": ["G", "C", "G", "C", "G", "C", "E", "G"], "name": "Open C"}, "EDF#ABDF#E": {"tuning_array": ["E", "D", "F#", "A", "B", "D", "F#", "E"], "name": "D 6/9"}, "AC#EG#BC#EG#": {"tuning_array": ["A", "C#", "E", "G#", "B", "C#", "E", "G#"], "name": "Don Helms"}, "FA#D#G#C#F#A#D#": {"tuning_array": ["F", "A#", "D#", "G#", "C#", "F#", "A#", "D#"], "name": "F Standard"}, "DA#D#G#C#F#A#D#": {"tuning_array": ["D", "A#", "D#", "G#", "C#", "F#", "A#", "D#"], "name": "Half Step Drop D"}, "EA#D#G#C#F#A#D#": {"tuning_array": ["E", "A#", "D#", "G#", "C#", "F#", "A#", "D#"], "name": "Half Step Drop E"}}, "9-string": {"C#F#BEADGBE": {"tuning_array": ["C#", "F#", "B", "E", "A", "D", "G", "B", "E"], "name": "Standard"}, "GCFEADGBE": {"tuning_array": ["G", "C", "F", "E", "A", "D", "G", "B", "E"], "name": "Drop G"}, "EADGCFA#F#G#": {"tuning_array": ["E", "A", "D", "G", "C", "F", "A#", "F#", "G#"], "name": "All Fourth"}, "DFADAEFCE": {"tuning_array": ["D", "F", "A", "D", "A", "E", "F", "C", "E"], "name": "D minor 9th"}, "EABCDEFGA": {"tuning_array": ["E", "A", "B", "C", "D", "E", "F", "G", "A"], "name": "Gusli"}}, "10-string": {}, "11-string": {}, "12-string": {}}

var defaultColors={'root' : '#e70000',
    "minorsecond" : "#f9e400",
    "majorsecond" : "#f9a500",
    "minorthird" : "#005e00",
    "majorthird" : "#006c00",
    "perfectfourth" : "#009a00",
    "diminishedfifth" : "#000f41",
    "perfectfifth" : "#004997",
    "minorsixth" : "#a86b62",
    "majorsixth" : "#de516c",
    "minorseventh" : "#782586",
    "majorseventh" : "#781962",
    "uniquecolor" : "#fefefe",
    "textcolor":"#ffffff"}

var requestFlask = {}
requestFlask["notes"] = []
requestFlask["colors"] = {}
requestFlask["textcolor"]='#ffffff'

window.onload = function () {
    choice='scale'

    createTuningSelector(numberString)
    /* Event listener change string note */
    trianglehaut = document.getElementsByClassName("trianglehaut")
    trianglebas = document.getElementsByClassName("trianglebas")

    for (let i = 0; i < trianglehaut.length; i++) {
        trianglehaut[i].addEventListener("click", TuningUp)
    }
    for (let i = 0; i < trianglehaut.length; i++) {
        trianglebas[i].addEventListener("click", TuningDown)
    }


    allnoteleft=document.getElementsByClassName('roundchoice')
    for (let i = 0; i < allnoteleft.length; i++) {
        allnoteleft[i].addEventListener("click", noteSelector)
    }
    createModeSelector() 
    document.getElementById("rootselector").addEventListener("change", modeSelect)
    document.getElementById("modeselector").addEventListener("change", modeSelect)
    document.getElementById("tuningselector").addEventListener("change", changeTuning)
    document.getElementById("textcolor").addEventListener("change",textColor)


    document.getElementById("uniquecolor").addEventListener("change",uniqueColor)

    document.getElementById("generatebutton").addEventListener('click',request)
    document.getElementById("generatebuttonxs").addEventListener('click',request)
    /* Event listtener change string note */
    themeChoiceCircle = document.getElementsByClassName("roundtheme")

    for (let i = 0; i < themeChoiceCircle.length; i++) {
        themeChoiceCircle[i].addEventListener("click", themechoice)
    }
    requestFlask["root"]="A"
    requestFlask['intervalChoice']=true
    requestFlask['noteChoice']=false
    document.getElementById('intervals').style.backgroundColor='#06BC06'
    document.getElementById('button').addEventListener('click',toggleButtonLeft)

    colorPickerCircle=document.getElementsByClassName('colorpickercircle')
    for (let i = 0; i < colorPickerCircle.length; i++) {
        colorPickerCircle[i].addEventListener('change',checkAndSaveColors)      
    }
    document.getElementById('restoredefault').addEventListener('click',restoreDefault)


    checkAndSaveColors()
}

function toggleButtonLeft(){
    ToggleButton=document.getElementById('circlebutton')
    if (ToggleButton.style.marginLeft=='auto'){
        ToggleButton.style.marginLeft='0'
        ToggleButton.style.margin='0 3px'
        choice='scale'
        createModeSelector(choice)
        document.getElementById("modeselector").addEventListener("change", modeSelect)
    }
    else{
        ToggleButton.style.marginLeft='auto'
        choice='chord'
        createModeSelector(choice)
        document.getElementById("modeselector").addEventListener("change", modeSelect)
    }
 /*    margin: 0 3px; */
}


/* RAJOUTER EVENT A CHAQUE FOIS */
function createModeSelector(choice){
    if (choice=='scale'){
        modeSelectDiv = document.getElementById('modeselect')
        modeSelectDiv.innerHTML='Mode : '
        selectTag = document.createElement('select')
        selectTag.name = "mode"
        selectTag.id = "modeselector"
        optionSelect = document.createElement('option')
        optionSelect.value="custom"
        optionSelect.innerHTML="Custom"
        selectTag.appendChild(optionSelect)
        
        for (const key of Object.keys(scales)){
         optionSelect = document.createElement('option')
         optionSelect.value=key
         optionSelect.innerHTML=key
         selectTag.appendChild(optionSelect)
        }
        modeSelectDiv.appendChild(selectTag)
    }
    else if(choice=='chord'){
        modeSelectDiv = document.getElementById('modeselect')
        modeSelectDiv.innerHTML='Type : '
        selectTag = document.createElement('select')
        selectTag.name = "type"
        selectTag.id = "modeselector"
        optionSelect = document.createElement('option')
        optionSelect.value="custom"
        optionSelect.innerHTML="Custom"
        selectTag.appendChild(optionSelect)
        
        for (const key of Object.keys(chordstype)){
         optionSelect = document.createElement('option')
         optionSelect.value=key
         optionSelect.innerHTML=key
         selectTag.appendChild(optionSelect)
        }
        modeSelectDiv.appendChild(selectTag)
    }
}

function noteSelector(objet) {

    noteDiv=objet.target
    modeSelectorDiv = document.getElementById('modeselector')
    allOptions =modeSelectorDiv.getElementsByTagName("option")
    for (const i in allOptions) {
        if (allOptions[i].value=='custom'){
            modeSelectorDiv.selectedIndex=i;
            break
        }
    }
    
    if (noteDiv.style.backgroundColor == 'rgb(6, 188, 6)') {
        if (requestFlask["notes"].includes(noteDiv.id)) {
            requestFlask["notes"].splice(requestFlask["notes"].indexOf(noteDiv.id), 1)
        }
        else {
        }
        /* if already clicked */
        noteDiv.style.backgroundColor = "white"
    }
    else {
        noteDiv.style.backgroundColor = '#06BC06'
        if (requestFlask["notes"].includes(noteDiv.id)) {
        }
        else {
            requestFlask["notes"].push(noteDiv.id)
        }
    }
}

var numberString = 6;

function addTuning() {
    if (numberString == 9) { }
    else {
        tuningContainer = document.getElementById('tuningContainer')

        var firstDiv = document.createElement("div")
        firstDiv.className = "d-flex"

        var secondDiv = document.createElement("div")
        secondDiv.className = "roundtuning d-flex align-items-center justify-content-center"

        var firstImg = document.createElement("img")
        firstImg.className = "trianglehaut"
        firstImg.src = "image/icons8-tri-croissant-100.png"
        firstImg.alt = "triangle haut"
        firstImg.addEventListener("click", TuningUp)

        var thirdDiv = document.createElement("div")
        thirdDiv.innerHTML = "E"
        thirdDiv.id = "string" + String(numberString + 1)

        var secondImg = document.createElement("img")
        secondImg.className = "trianglebas"
        secondImg.src = "image/icons8-tri-dcroissant-100.png"
        secondImg.alt = "triangle bas"
        secondImg.addEventListener("click", TuningDown)

        secondDiv.appendChild(firstImg)
        secondDiv.appendChild(thirdDiv)
        secondDiv.appendChild(secondImg)

        firstDiv.appendChild(secondDiv)
        tuningContainer.appendChild(firstDiv)

        numberString += 1

        Tuning.push("E")
        requestFlask["tuning"] = Tuning
        createTuningSelector(numberString)
    }
}


function removeTuning() {
    if (numberString == 4) { }
    else {
        tuningContainer = document.getElementById('tuningContainer')
        tuningString = tuningContainer.children
        numberOfString = tuningString.length
        tuningContainer.removeChild(tuningString[numberOfString - 1])
        numberString -= 1
        Tuning.pop()
        requestFlask["tuning"] = Tuning
        createTuningSelector(numberString)
    }

}


function createTuningSelector(numberString) {

    tuningSelector = document.getElementById("tuningselector")
    tuningSelector.innerHTML=''
    tuningDictStrings = tuningsDict[String(numberString) + "-string"]
    optionValue = document.createElement("option")
    optionValue.value = 'custom'
    optionValue.innerHTML = 'Custom'
    tuningSelector.appendChild(optionValue)
    for (const key of Object.keys(tuningDictStrings)) {
        optionValue = document.createElement("option")
        optionValue.value = key
        var stringtune=''
        for (let i = 0; i < tuningDictStrings[key]["tuning_array"].length; i++) {
            if (i==tuningDictStrings[key]["tuning_array"].length-1){
                stringtune += tuningDictStrings[key]["tuning_array"][i]
            }
            else{
                stringtune += tuningDictStrings[key]["tuning_array"][i]+""
            }
        }

        stringtune +=" - " + tuningDictStrings[key]["name"]
        optionValue.innerHTML = stringtune
        /*         optionValue.innerHTML = key + "-" + tuningDictStrings[key]["name"] to add name  */
        tuningSelector.appendChild(optionValue)
    }
}


function themechoice(objet){
    if (objet.target.id=='intervals'){
        if (requestFlask['intervalChoice']){}
        else{objet.target.style.backgroundColor='#06BC06';
        document.getElementById('notes').style.backgroundColor='white';
        requestFlask['intervalChoice']=true;
        requestFlask['noteChoice']=false;

    }
    }
    if (objet.target.id=='notes'){
        if (requestFlask['noteChoice']){}
        else{objet.target.style.backgroundColor='#06BC06';
        document.getElementById('intervals').style.backgroundColor='white'};
        requestFlask['intervalChoice']=false;
        requestFlask['noteChoice']=true;
    }
}

function changeTuning() {

    tuningContainer = document.getElementById('tuningContainer').children
    tuningSelectorDiv = document.getElementById("tuningselector")
    tuningSelectora = tuningSelectorDiv.options[tuningSelectorDiv.selectedIndex].value
/* FINIR FONCTION APPELER LE TUNING QUON CHANGE  */
    tuningDictStringValue=tuningsDict[String(numberString) + '-string'][tuningSelectora]['tuning_array']
    requestFlask["tuning"]=tuningDictStringValue

    for (let i = 0; i < requestFlask["tuning"].length; i++) {
        tuningContainer[i].children[0].children[1].innerHTML = requestFlask["tuning"][i]

    }
}
var Tuning = ["E", "A", "D", "G", "B", "E"]
requestFlask["tuning"] = Tuning

function TuningUp(objet) {
    var allNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
    var index = allNotes.indexOf(objet.target.parentNode.children[1].innerHTML)
    objet.target.parentNode.children[1].innerHTML = allNotes[(index + 1 + 12) % 12]

    allChildrenOfBigParent = objet.target.parentNode.parentNode.parentNode.children
    targetParent = objet.target.parentNode.parentNode
    index = Array.from(allChildrenOfBigParent).indexOf(targetParent)

    Tuning[index] = String(objet.target.parentNode.children[1].innerHTML)
    requestFlask["tuning"] = Tuning
    tuningSelectorTune = document.getElementById('tuningselector')
    allOptions =tuningSelectorTune.getElementsByTagName("option")
    for (const i in allOptions) {
        if (allOptions[i].value=='custom'){
            tuningSelectorTune.selectedIndex=i;
            break
        }
    }

}

function TuningDown(objet) {
    var allNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
    var index = allNotes.indexOf(objet.target.parentNode.children[1].innerHTML)
    objet.target.parentNode.children[1].innerHTML = allNotes[(index - 1 + 12) % 12]

    allChildrenOfBigParent = objet.target.parentNode.parentNode.parentNode.children
    targetParent = objet.target.parentNode.parentNode
    index = Array.from(allChildrenOfBigParent).indexOf(targetParent)
    Tuning[index] = String(objet.target.parentNode.children[1].innerHTML)
    requestFlask["tuning"] = Tuning
    
    tuningSelectorTune = document.getElementById('tuningselector')
    allOptions =tuningSelectorTune.getElementsByTagName("option")
    for (const i in allOptions) {
        if (allOptions[i].value=='custom'){
            tuningSelectorTune.selectedIndex=i;
            break
        }
    }

}




function modeSelect() {

    var allNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]

    rootDiv = document.getElementById('rootselector')
    root = rootDiv.options[rootDiv.selectedIndex].value
    requestFlask["root"]=root

    chosenScaleDiv = document.getElementById('modeselector')
    if (choice=='scale'){
    chosenScale = scales[chosenScaleDiv.options[chosenScaleDiv.selectedIndex].value]
    }
    else if(choice=='chord'){
        chosenScale = chordstype[chosenScaleDiv.options[chosenScaleDiv.selectedIndex].value]
    }

    if (chosenScaleDiv.options[chosenScaleDiv.selectedIndex].value == 'Custom') {
    }
    else {
        index = allNotes.indexOf(root)
        tempArray = []
        for (let i = 0; i < chosenScale.length; i++) {
            tempArray.push(allNotes[(index + chosenScale[i]) % 12])
        }
        onModeChangeColorNotes(tempArray)
        requestFlask['notes'] = tempArray
    }

}


function onModeChangeColorNotes(scale) {
    allSelectableNotes = document.getElementsByClassName('roundchoice')
    
    for (const i of allSelectableNotes) {
        i.style.backgroundColor = 'white'
        if (scale.includes(i.id)) {
            i.style.backgroundColor = '#06BC06'
        }
    }

}


function setColorWindow(){
    document.getElementById('themeprincipalepage').style.display ='none'
    document.getElementById('colorpanel').style.display='block'
}

function closeColorWindow(){
    document.getElementById('themeprincipalepage').style.display ='block'
    document.getElementById('colorpanel').style.display='none'
}

function checkAndSaveColors(){
    colorsCircle=document.getElementById('container-allcolors').getElementsByClassName('colorpickercircle')
    for (let i = 0; i < colorsCircle.length; i++) {
        nameInterval=colorsCircle[i].id.split('interval')[1]
        requestFlask['colors'][nameInterval]=colorsCircle[i].value
    }
}
function applyColorWindow(){
    document.getElementById('themeprincipalepage').style.display ='block'
    document.getElementById('colorpanel').style.display='none'
    checkAndSaveColors()
}
function textColor(){
    requestFlask["textcolor"]=document.getElementById("textcolor").value
}
function uniqueColor(){
    colorPickerCircleDiv=document.getElementById('container-allcolors').getElementsByClassName('colorpickercircle')
    uniqueColorDivValue=document.getElementById('uniquecolor').value

    for (let i = 0; i < colorPickerCircleDiv.length; i++) {
        colorPickerCircleDiv[i].value=uniqueColorDivValue
    }
}

function restoreDefault(){
    colorPickerCircleDiv=document.getElementById('container-allcolors').getElementsByClassName('colorpickercircle')
    for (let i = 0; i < colorPickerCircleDiv.length; i++) {
        valueOfIDInterval=colorPickerCircleDiv[i].id.split('interval')[1]
        colorPickerCircleDiv[i].value=defaultColors[valueOfIDInterval]
    }

    uniqueColorAndText=document.getElementById('uniquecolorandtext').getElementsByClassName('colorpickercircle')

    for (let i = 0; i < uniqueColorAndText.length; i++) {
        valueOfIDInterval=uniqueColorAndText[i].id
        uniqueColorAndText[i].value=defaultColors[valueOfIDInterval]
        
    }
    checkAndSaveColors()
}

var downloadbool=false
var i=0
function request() {
    const Http = new XMLHttpRequest();
    const url = "http://127.0.0.1:5000/";
    Http.onerror = function(e){
        imgresponse = document.getElementById("imgsvg")
        imgresponse.className='d-flex align-items-center justify-content-center'
        imgresponse.innerHTML=''
        divalert=document.createElement('div')
        divalert.style.color='black'
        divalert.style.fontWeight=600
        divalert.style.fontSize='18px'
        divalert.innerHTML = ' Oups ! La communication avec le serveur est difficile ... '+i
        imgresponse.appendChild(divalert)
        i++
    };
    Http.open("POST", url);
    Http.setRequestHeader("content-type", "application/json")
    Http.send(JSON.stringify(requestFlask));
    

    Http.onreadystatechange = function() {
        if(this.status==200 && this.readyState==4){
            imgresponse = document.getElementById("imgsvg")
            imgresponse.innerHTML = Http.responseText
            imgresponse.children[0].src=imgresponse.children[0].src+"?" + new Date().getTime();
    
            downloadlink=document.getElementById('downloadlink')
            downloadlink.href=imgresponse.children[0].src
            downloadlink.download='ScaleDiagram'
            if (!downloadbool){
            downloadbutton=document.createElement('div')
            downloadbutton.id='downloadbutton'
            downloadbutton.innerHTML='Download'
            downloadlink.appendChild(downloadbutton)
            downloadbool=true
        }
        }
        else{
            imgresponse = document.getElementById("imgsvg")
            imgresponse.innerHtml = ' Oups ! La communication avec le serveur est difficile ... '
        }
    }

}






