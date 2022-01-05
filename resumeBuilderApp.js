"use strict";

/*
 *
 * COMPONENTS LIST
 *
 */

const closeComponent = {
  template: `<span class="close">&times;</span>`,
  styles: `.close{font-size:14px; font-weight:700; background-color:#f0e0e0; padding:0px 3px 3px 3px; color:white; float:right; text-align:center; margin:-10px -10px auto auto; position:relative; cursor:pointer;border-radius:3px; width:15px; height:20px;}
  .close:hover{background-color:#f02020;}`
};

const spacerComponent = {
  template: `<div class="spacer"></div>`,
  styles: `.spacer{height:20px; width:100%;}`
};

/*
 *
 * MAIN COMPONENTS LIST 
 *
 **/

// Name Component

const nameComponent = {
  template: `
<div id="namecomponent" class="component">
	${closeComponent.template}
  <label>Name</label> 
  <div>
    <input type="text" placeholder="first name" id="firstname" name="firstname" required>
    <input type="text" placeholder="mid name" id="midname" name="midname" required>
    <input type="text" placeholder="last name" id="lastname" name="lastname" required>
  </div>
</div>`,
  styles: ``
};

// Job Title Component

const jobtitleComponent = {
  template: `
<div id="jobtitlecomponent" class="component">
	${closeComponent.template}
  <label>Job Title</label>
  <div>
    <input type="text" placeholder="job title" id="jobtitle" name="jobtitle" required>
  </div>
</div>`,
  styles: `#jobtitle{width:80%; display:flex;}`
};

// About Me Component

const aboutMeComponent = {
  template: `
<div id="aboutmecomponent" class="component">
	${closeComponent.template}
  <label>About Me</label>
  <div>
  	<textarea placeholder="describe about yourself" id="aboutme" name="aboutme" required></textarea>   
  </div>
</div>`,
  styles: `#aboutme{max-width:80%; display:flex;padding:20px 10px;}`
};


// Address Component

const addressComponent = {
  template: `
<div id="addresscomponent" class="component">
  ${closeComponent.template}
  <label>Address</label>
  <div>
    <input type="text" placeholder="street" id="street" name="street" required>
    <input type="text" placeholder="city" id="city" name="city" required>
    <input type="text" placeholder="state" id="state" name="state" required>
    <input type="text" placeholder="postcode" id="postcode" name="postcode" required>
    <input type="text" placeholder="country" id="country" name="country" required>
  </div>
</div>`,
  styles: ``
};

// Skillset Component

const skillsetsComponent = {
  template: `
  <div id="skillsetscomponent" class="component">
  	${closeComponent.template}
    <label>Skillset</label>
    <div>
    <input type="text" id="skillsets" name="skillsets" placeholder="skillsets" >
    <input type="submit" id="addskill" value="Add">
    </div>
    
    <!--remove skills -->
    
    <div id="skillslistcontainer">
      <div id="skillslist">
      </div>
      <div>    
      	<input type="submit" id="removeskills" value="Remove">
      </div>    
    </div>
  </div>`,

  styles: `
  #skillslistcontainer{margin-left:5px;display:none;width:85%;}
  #skillslist{padding:10px 0px 20px 0px;}
  .skills{margin-top:2px;border-radius:10px;padding:5px 10px 0px 10px;}
  .skills > span{border:0px; border-radius:4px; padding:2px 8px; width:100%;}
  `
};


const projectsComponent = {
  template: `
  <div id="projectscomponent" class="component">
  	${closeComponent.template}
    <label>Projects</label>
    <div>
    <input type="text" id="projectname" name="projectname" placeholder="project name">
    <input type="text" id="projectdesc" name="projectdesc" placeholder="project description">
    <input type="text" id="technologyused" name="technologyused" placeholder="technology used">
    <input type="submit" id="addproject" value="Add">
    </div>
    
    <!--remove skills -->
    
    <div id="projectslistcontainer">
      <div id="projectslist">
      </div>
      <div>    
      	<input type="submit" id="removeprojects" value="Remove">
      </div>    
    </div>
  </div>`,

  styles: `
  
  #projectslistcontainer{margin-left:5px;display:none;width:85%;}
  #projectslist{padding:10px 0px 20px 0px;}
  .projects{margin-top:2px;border-radius:10px;padding:5px 10px 0px 10px;}
  .projects > span{border:0px; border-radius:4px; padding:2px 8px; width:80%;display:inline-block;margin-top:2px;}  
  `
};


const educationsComponent = {
  template: `
  <div id="educationscomponent" class="component">
  	${closeComponent.template}
    <label>Educations</label>
    <div>
    <input type="text" id="coursename" name="coursename" placeholder="course name">
    <input type="text" id="orgname" name="orgname" placeholder="organization name">
    <input type="text" id="orglocation" name="orglocation" placeholder="organization location">
    <input type="text" id="fromdate" name="fromdate" placeholder="from date [dd-mm-yyyy]">
    <input type="text" id="todate" name="todate" placeholder="to date [dd-mm-yyyy]">
    <input type="text" id="aggregate" name="aggregate" placeholder="aggregate/percent">
    
    <input type="submit" id="addeducation" value="Add">
    </div>
    
    <!--remove skills -->
    
    <div id="educationslistcontainer">
      <div id="educationslist">
      </div>
      <div>    
      	<input type="submit" id="removeeducations" value="Remove">
      </div>    
    </div>
  </div>`,

  styles: `
  
  #educationslistcontainer{margin-left:5px;display:none;width:85%;}
  #educationslist{padding:10px 0px 20px 0px;}
  .educations{margin-top:2px;border-radius:10px;padding:5px 10px 0px 10px;}
  .educations > span{border:0px; border-radius:4px; padding:2px 8px; width:80%;display:inline-block;margin-top:2px;}
  [title="coursename"]{
  font-weight:bold;
  }
  `
};



//Control Component

const controlComponent = {
  template: `<div id="control" class="component">
<input type="submit" value="Save" id="save">
<input type="reset" value="Reset" id="reset">
<input type="submit" value="Fetch" id="fetch">
</div>`,
  styles: ``
};


// Collection of Compoents' Templates --- components must be arranged in a order the need to be presented

const componentTemplates = `
${nameComponent.template}
${jobtitleComponent.template}
${aboutMeComponent.template}
${addressComponent.template}
${skillsetsComponent.template}
${projectsComponent.template}
${educationsComponent.template}
${controlComponent.template}
`;

// Collection of Components' Styles

const componentStyles = `
${nameComponent.styles}
${jobtitleComponent.styles}
${aboutMeComponent.styles}
${addressComponent.styles}
${skillsetsComponent.styles}
${projectsComponent.styles}
${educationsComponent.styles}
${controlComponent.styles}
${spacerComponent.styles}
${closeComponent.styles}`;

// Style element to be injected to the head tag

const appStyles = `
<style>
/* element-based element selection */

*{margin:auto; font-family:"Segoe UI"; font-size:14px;}
body{background-color:rgba(0,0,50,0.2);}
form{padding:20px;}
input, textarea{border:0px; border-radius:4px; padding:5px 10px; text-align:left; margin:8px; color:#405070;}
span{color:#405070;}
[type=text], textarea{width:80%; display:flex;background-color:#f0f0f0;}
[type=submit],[type=reset] {background-color:#405070; color:#d0e0f0; margin:0px; box-shadow:1px 6px 4px 2px rgba(0,0,0,0.08);}
label{padding:5px 0px; color:#006080; font-weight:700;}
[type=submit]:hover,[type=reset]:hover{background-color:#858080;}

/* class-based element selection */

.card, .component {background-color:#f9f9f9; box-shadow:1px 6px 4px 2px rgba(0,0,0,0.08); border:0px; border-radius:5px; padding:20px; margin:10px auto; max-width:500px;}
.flex-row{display:flex; flex-direction:row; padding:10px;}
.flex-cell{min-height:100px; min-width:100px; margin:3px; background-color:#f0f0f0; flex:40%; border-radius:5px;}
.crud{padding:10px 20px 20px 10px;}
.update, .delete{color:#f0f0ff; border:0px; padding:5px 10px;}
.update{background-color:#80809f;}
.delete{background-color:#607090;}


/* id-based element selection */

/* media settings */

@media (max-width: 610px) {
.flex-row{display:flex; flex-direction:column; padding:5px;}
}

/* componentStyles */
${componentStyles}
</style>`;

// App Component -- root component to which all other components are injected

const appComponent = `<!doctype html>
<html>
<head>
<title>My Sucess Story</title>
${appStyles}
</head>
<body>
<main>
<div class="flex-row" id="form">
  <div class="flex-cell">
  <form action="/">
  ${componentTemplates}
  </form>
  </div>  
  <div class="flex-cell" id="resume">  
  </div>
</div>
</main>
</body>
</html>`;

document.write(appComponent);

/*
 *
 * GLOBAL FUNCTIONS AND CONTROLS
 *
 *
 */

// global functions

const isIdSelector = (arg) => arg[0] == "#";
const isClassSelector = (arg) => arg[0] == ".";
const isSet = (arg) => arg instanceof Set;
const isArray = (arg) => arg instanceof Array;

const Q = (arg) => document.querySelector(arg);
const Qs = (arg) => document.querySelectorAll(arg);


/*
 *
 * param idsArray {array} an array of ids of input[type=text]--- source of data 
 * param dataset {Set} a set object which stores data 
 * param className {string} class name used to select the element
 * param targetID {string} id of the element to which view template will be added
 * returns SetCrud {object} provides CRUD ability to manage data 
 *
 */

function CRUD(idsArray, dataset, className, targetID) {

  //validate elements
  const isInput = (arg) => arg["tagName"] == "INPUT";
  const isCheckbox = (arg) => isInput(arg) ? (arg["type"] == "checkbox") : false;
  const isInputChecked = (arg) => isCheckbox(arg) ? (arg["checked"] == true) : false;
  const isSpan = (arg) => arg["tagName"] == "SPAN";
  const isDiv = (arg) => arg["tagName"] == "DIV";

  //validates data
  const isArray = (arg) => arg instanceof Array;
  const isObjectsArray = (arg) => isArray(arg) ? arg.every((val) => val != null && val != undefined && val instanceof Object) : false;
  const isObject = (arg) => arg instanceof Object && arg !== null && arg !== undefined;
  const isSetObject = (arg) => arg instanceof Set;

  //compares data
  const areObjectsEqual = (obj1, obj2) => Object.entries(obj1).toString() == Object.entries(obj2).toString();

  /*
   *
   * CONSTRUCTOR
   * initializes CRUD properties
   *
   **/
  this.idsArray = idsArray;
  this.dataset = dataset;
  this.className = className;
  this.targetID = targetID;

  /*
   *
   * desc deleteItem function deletes the sourceData from the targetDataset   *
   * param sourceData {String | Object}
   * param targetDataset {Set Object}
   * returns the dataset after removing an item
   *
   **/

  const deleteItem = (sourceData, targetDataset) => {
    let isExist = 0;
    targetDataset.forEach((targetData) => {
      if (areObjectsEqual(sourceData, targetData)) {
        targetDataset.delete(targetData)
        isExist++
        console.log(`${sourceData} has been deleted from the ${targetDataset}`);
      }
    });
    isExist > 0 ? null : console.log(`${sourceData} is not found in the ${targetDataset}`);
  }
  /*
   *
   * UPDATE SET ENTRIES
   * param oldVal {any} old value to be updated
   * param newVal {any} new value to be placed in place of old value
   * param dataset {Set} the dataset to which data need to be updated
   * returns updated dataset object
   *
   **/
  const updateDataset = (oldVal, newVal, dataset) => {
    let tempDataset = [...dataset];
    dataset.clear();
    tempDataset.forEach((val, ind) => {
      let updatedVal = val;
      if (areObjectsEqual(val, oldVal)) {
        updatedVal = newVal;
        console.log(`${oldVal} has been updated with ${newVal}`);
      } else {
        updatedVal = val;
        console.log(`${newVal} does not exist in the ${dataset}`);
      }
      dataset.add(updatedVal);
    });
  };

  /*
   *
   * extracts values from idsArray
   * returns idsData {string | object}
   *
   **/
  this.pullIdsData = () => {
    let idsData;
    if (isArray(this.idsArray) && this.idsArray.length > 1) {
      let objData = {};
      this.idsArray.forEach((id) => {
        id = id[0] == "#" ? id : `#${id}`;
        if (Q(id).value.length > 0) {
          objData[Q(id).name] = Q(id).value;
        }
      });
      idsData = objData;
    } else {
      idsData = Q(this.idsArray).value;
    }
    return idsData;
  }

  /*
   *
   * desc Validates newItem and adds it to the dataset if it is unique.
   *
   **/
  this.addItem = (newItem) => {

    let item = newItem || this.pullIdsData();

    if (item.length > 0 || Object.keys(item).length > 0) {
      if (isSetObject(this.dataset)) {
        let isExist = 0;
        this.dataset.forEach((obj) => {
          if (areObjectsEqual(obj, item)) {
            isExist += 1;
          }
        });

        if (isExist == 0) {
          this.dataset.add(item);
          this.injectTemplate();
          console.log(`${item} has been added to the ${this.dataset}`);
        } else {
          console.log(`${item} is already in the ${this.dataset}`);
        }
      } else {
        console.log(`${this.dataset} must be a set object.`);
      }
    } else {
      console.warn(`Data is empty.`)
    }
  }

  /*
   *
   * desc this depends on the template produced by createMultiselectables 
   * param element {HTML element} checkbox element whose checked property is true.
   * returns {string | object}
   *
   **/
  this.pullData = (element) => {
    let children = element.parentElement.children.length;
    let sourceData = "";
    let returnObj = {};
    element.parentElement.childNodes.forEach((span) => {
      if (isSpan(span)) {
        /* more than two children */
        if (children > 3) {
          returnObj[span.title] = span.innerText;
        }
        /* two children */
        if (children == 3) {
          sourceData = span.innerText;
        }
      }
    });
    return (Object.keys(returnObj).length > 0 && sourceData.length == 0) ? returnObj : sourceData;
  }

  /*
   *
   * returns returnedObjArr {Array<string|object>} an array of selected items 
   *
   **/
  this.pullSelectedDataArray = () => {
    let returnedObjArr = [];
    Qs(`.${this.className}`).forEach((div) => {
      let isChecked = false;
      div.childNodes.forEach((el) => {
        if (isInputChecked(el)) {
          isChecked = true;
          returnedObjArr.push(this.pullData(el));
        }
      });
    });
    return returnedObjArr;
  }

  /*
   *
   * itemsArr {Array}
   * dataset {Set Object}
   * desc deletes itemsArr multiple items from dataset 
   *
   **/

  this.deleteItems = () => {
    let itemsArr = this.pullSelectedDataArray();
    isArray(itemsArr) ? itemsArr.forEach((item) => deleteItem(item, this.dataset)) : deleteItem(itemsArr, this.dataset);
    this.injectTemplate();
  }

  /*
   *
   * desc sets the eventlisteners for each checkboxes and their span element, update and delete buttons
   *
   *
   **/
  this.setEventListeners = () => {

    Qs(`.${this.className} > input[type=checkbox]`).forEach((el) => {
      let isChecked = false;
      el.parentElement.style.backgroundColor = "inherit";
      //toggles span's contenteditable property and update & delete buttons' display property
      el.onclick = () => {
        isChecked = !isChecked;
        el.parentElement.lastElementChild.style.display = isChecked ? "block" : "none";
        el.parentElement.style.backgroundColor = isChecked ? "#f3f3f8" : "inherit";

        //toggling of contenteditable property of span element if the item is selected
        el.parentElement.childNodes.forEach((span) => {
          if (isSpan(span)) {

            let contentEditable = `border:1px solid #b0b0ff;`;
            let contentNotEditable = `border:inherit;`;            
            span.contentEditable = false;
            span.style = contentNotEditable;

            //on clicking span element, span innner text turns editable 
            span.onclick = () => {
                if (isChecked) {
                  span.contentEditable = true;
                  span.style = contentEditable;
                } else {
                  span.contentEditable = false;
                  span.style = contentNotEditable;
                }
            }
            //on double clicking span element, span innner text turns uneditable
            span.ondblclick = () => {
              span.contentEditable = false;
              span.style = contentNotEditable;
            }
          }
        });

        //setting onclick eventlisteners for each update and delete buttons
        let oldData = this.pullData(el);
        el.parentElement.lastElementChild.childNodes.forEach((inp) => {

          //setting onclick eventListener for update button         
          if (inp.className == "update") {
            inp.onclick = () => {
              let newData = this.pullData(el);
              updateDataset(oldData, newData, this.dataset);
              //this.injectTemplate();
            }
          }

          //setting onclick eventListener for delete button 
          if (inp.className == "delete") {
            inp.onclick = () => {
              deleteItem(this.pullData(el), this.dataset);
              el.parentElement.style.display = "none";
              Q(this.targetID).parentElement.style.display = this.dataset.size > 0 ? "block" : "none";
              //this.injectTemplate();
            }
          }
        });
      }
    });
  }

  /*
   *
   * returns injectable {HTML snippet} a multiselectable crud of dataset items
   *
   **/
  this.createMultiSelectables = () => {
    let injectable = ``;
    this.dataset.forEach((item) => {
      if (isObject(item)) {
        injectable += `<div class="${this.className}"><input type="checkbox"><br>` + Object.keys(item).map((key) => `<span title="${key}">${item[key]}</span><br>`).join("") + `
        <div class="crud" style="display:none;">
        <input type="submit" class="update" value="Update">
        <input type="submit" class="delete" value="Delete">
        </div>
        </div>`;
      }
      if (typeof item == "string") {
        injectable += `<div class="${this.className}">
        <input type="checkbox"><span>${item}</span>
        <div class="crud" style="display:none">
        <input type="submit" class="update" value="Update">
        <input type="submit" class="delete" value="Delete">
        </div>
        </div>\n`
      }
    })
    return injectable;
  }

  /*
   *
   * injects the mulitselectable dataset items to the targetID
   *
   **/
  this.injectTemplate = () => {
    Q(this.targetID).innerHTML = this.createMultiSelectables();
    this.setEventListeners();
    Q(this.targetID).parentElement.style.display = this.createMultiSelectables().length > 0 ? "block" : "none";
  }
}

/*
 *
 * this function initializes the application and sets eventlisteners for control elements 
 *
 **/

function initializeApp() {

  const resumeDetails = {};
  const closeSpan = Qs(".close").forEach((el) => {
    el.onclick = () => el.parentElement.style.display = "none";
  });

  //skillsets

  resumeDetails["skillsets"] = new Set();
  const skillSetsCrud = new CRUD("#skillsets", resumeDetails.skillsets, "skills", "#skillslist");

  const addSkill = Q("#addskill");
  const removeSkills = Q("#removeskills");

  addSkill.onclick = () => skillSetsCrud.addItem();
  removeSkills.onclick = () => skillSetsCrud.deleteItems();


  // projects


  resumeDetails["projects"] = new Set();
  const projectsCrud = new CRUD(["#projectname", "#projectdesc", "#technologyused"], resumeDetails.projects, "projects", "#projectslist");

  const addProject = Q("#addproject");
  const removeProjects = Q("#removeprojects");

  addProject.onclick = () => projectsCrud.addItem();
  removeProjects.onclick = () => projectsCrud.deleteItems();

  // certficates

  // experience

  // education

  resumeDetails["educations"] = new Set();
  const educationsCrud = new CRUD(
    ["#coursename", "#orgname", "#orglocation", "#fromdate", "#todate", "#aggregate"],
    resumeDetails.educations,
    "educations",
    "#educationslist");

  const addEducation = Q("#addeducation");
  const removeEducations = Q("#removeeducations");

  addEducation.onclick = () => educationsCrud.addItem();
  removeEducations.onclick = () => educationsCrud.deleteItems();


  // declaration


  //Save all and fetch all 
  const saveBut = Q("#save");
  const fetchBut = Q("#fetch");

  saveBut.onclick = () => saveData();
  fetchBut.onclick = () => fetchData();

  let saveDataCallCount = 0;

  function saveData() {

    //nameComponent
    resumeDetails.name = {};
    resumeDetails.name.first = Q("#firstname").value;
    resumeDetails.name.mid = Q("#midname").value;
    resumeDetails.name.last = Q("#lastname").value;

    //jobtitleComponent
    resumeDetails.title = Q("#jobtitle").value;

    //aboutMeComponent
    resumeDetails.aboutMe = Q("#aboutme").value;

    //addressComponent
    resumeDetails.address = {};
    resumeDetails.address.street = Q("#street").value;
    resumeDetails.address.city = Q("#city").value;
    resumeDetails.address.state = Q("#state").value;
    resumeDetails.address.postcode = Q("#postcode").value;
    resumeDetails.address.country = Q("#country").value;

    saveDataCallCount += 1;
  }

  function fetchData() {

    Qs(".component").forEach((el) => {
      el.style.display = "block"
    });

    if (saveDataCallCount > 0) {

      //nameComponent
      Q("#firstname").value = resumeDetails.name.first;
      Q("#midname").value = resumeDetails.name.mid;
      Q("#lastname").value = resumeDetails.name.last;

      //jobtitleComponent
      Q("#jobtitle").value = resumeDetails.title;

      //aboutMeComponent
      Q("#aboutme").value = resumeDetails.aboutMe;

      //addressComponent
      Q("#street").value = resumeDetails.address.street;
      Q("#city").value = resumeDetails.address.city;
      Q("#state").value = resumeDetails.address.state;
      Q("#postcode").value = resumeDetails.address.postcode;
      Q("#country").value = resumeDetails.address.country;
    }
  }
}

initializeApp();
