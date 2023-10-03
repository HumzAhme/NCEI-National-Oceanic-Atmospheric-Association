//https://www.ncdc.noaa.gov/cdo-web/search
//Actual DATA site already fetching upon request.


//PROCess 1:  ATTRIBUTES GETTING THROUGH USER:

var endpont=''; //Q. WHY NOT KEEPING THE 'endpont' value after 'window.location.href' happens in 'datasetr()'? in consolog bfr it, the value is displayed but after it, the console along with values is cleared.
const dater=()=>{endpont='data'; console.log(dater, endpont);window.location.href='data.htm';}//function itself, return-value
//dater2()}
//setTimeout( ,2000)}//WHy not waiting and traversing to the page instantly?
//const dater2=()=>{window.location.href='data.htm';}
const datasetr=()=>{endpont='datasets'; console.log(datasetr, endpont);setTimeout((endpont) => {window.location.href='datasets.htm';endpont='datasets';}, 2000);}
const statons=()=>{endpont='stations'; console.log(statons, endpont);setTimeout((endpont) => {window.location.href='stations.htm';endpont='stations'}, 2000);}
const locatons=()=>{endpont='locations'; console.log(locatons, endpont);setTimeout((endpont) => {window.location.href='locat.htm';endpont='locations'}, 2000);}
const locategs=()=>{endpont='locationcategories'; console.log(locategs, endpont);setTimeout((endpont) => {window.location.href='locateg.htm';endpont='locationcategories'}, 2000);}
const dtatyps=()=>{endpont='datatypes'; console.log(dtatyps, endpont);setTimeout((endpont) => {window.location.href='dtatyp.htm';endpont='datatypes'}, 2000);}
const dtacats=()=>{endpont='datacategories'; console.log(dtacats, endpont);setTimeout((endpont) => {window.location.href='datacats.htm';endpont='datacategories'}, 2000);}

    var dtaTypId=""
const dtaTpid=()=>{dtaTypId="";
const valu = document.getElementById('dtpid').value;
if(valu!=""){dtaTypId="datatypeid="+valu+"&"}
console.log(dtaTypId)}

var locid=""
const locaid=()=>{locid="";
const valu = document.getElementById('locid').value;
if(valu!=""){locid="locationid="+valu+"&"}
console.log(locid)}

var staide=""
const staid=()=>{staide="";
const valu = document.getElementById('staid').value;
if(valu!=""){staide="stationid="+valu+"&"}
console.log(staide)}

var strtDte=""
const strtDt=()=>{strtDte="";
const valu = document.getElementById('stardt').value;
if(valu!=""){strtDte="startdate="+valu+"&"}
console.log(strtDte)}

var endate=""
const endat=()=>{endate="";
const valu = document.getElementById('endte').value;
if(valu!=""){endate="enddate="+valu+"&"}
console.log(endate)}

var sortfield=""
const sortfild=()=>{sortfield="";
const valu = document.getElementById('sorfld').value;
if(valu!=""){sortfield="sortfield="+valu+"&"}
console.log(sortfield)}

var sortordr=""
const sortord=()=>{sortordr="";
const valu = document.getElementById('srordr').value;
if(valu!=""){sortordr="sortorder="+valu+"&"}
console.log(sortordr)}

var lmt=""
const limt=()=>{lmt="";
const valu = document.getElementById('lmt').value;
if(valu!=""){lmt="limit="+valu+"&"}
console.log(lmt)}

var ofste=""
const ofst=()=>{ofste="";
const valu = document.getElementById('ofst').value;
if(valu!=""){ofste="offset="+valu+"&"}
console.log(ofste)}

var dtaCat=""
const dtaCtgo=()=>{dtaCat=""
const valu = document.getElementById('dtctg').value
if(valu!=""){dtaCat="datacategoryid="+valu+"&"}
console.log(dtaCat)}

var dtastid=""
const dtasetid=()=>{dtastid=""
const valu = document.getElementById('dtastid').value
if(valu!=""){dtastid="datasetid="+valu+"&"}
console.log(dtastid)}

var locatgid=""
const loctgid=()=>{locatgid=""
const valu = document.getElementById('locatgid').value
if(valu!=""){locatgid="locationcategoryid="+valu+"&"}
console.log(locatgid)}

var extnt=""
const extn=()=>{extnt=""
const valu = document.getElementById('extnt').value
if(valu!=""){extnt="extent="+valu+"&"}
console.log(extnt)}

var unts=""
const units=()=>{unts=""
const valu = document.getElementById('unts').value
if(valu!=""){unts="units="+valu+"&"}
console.log(unts)}

var mtadta=""
const mtadata=()=>{mtadta=""
const valu = document.getElementById('mtadta').value
if(valu!=""){mtadta="includemetadata="+valu+"&"}
console.log(mtadta)}

//q.1.  HOW TO PASS A VALUE IN THE ABOVE FUNCTIONS UPON CALL FROM HTML AND ASSIGN THAT PARAM AS THE 'id' in getElementById('') INSTEAD??

                                    //${endpont} below is useless bcz the value of it at the assignment time is extracted tht is, just as the 'urrl' is initialized. THAT WAS/IS THE REASON WHY THE CHANGED VALUE OF ENPOINT AFTER THE FUNCTIONS OF ENPOINT ASSIGNING UPON BUTTON CLICKS RAN AND ASSIGNED VALUE TO 'endpont'. For that to work, 'urrl' will again be required to be initailized.
var urrl=`https://www.ncei.noaa.gov/cdo-web/api/v2/`//?datasetid=GHCND&locationid=ZIP:28801&startdate=2010-05-01&enddate=2010-05-01`//service=request-token
//PROCess 2:  URL CONSTRUCTION

const fetchit1 =()=>{ endpont='datasets'
    urrl=`https://www.ncei.noaa.gov/cdo-web/api/v2/${endpont}?${dtaTypId}${locid}${staide}${strtDte}${endate}${sortfield}${sortordr}${lmt}${ofste}`
    console.log(urrl, "\nnow fetching1..")
    fetchit()}

const fetchit2 =()=>{ endpont='datacategories'
    urrl=`https://www.ncei.noaa.gov/cdo-web/api/v2/${endpont}?${dtastid}${locid}${staide}${strtDte}${endate}${sortfield}${sortordr}${lmt}${ofste}`
    console.log(urrl, "\nnow fetching2..")
    fetchit()}

const fetchit3 =()=>{ endpont='datatypes'
    urrl=`https://www.ncei.noaa.gov/cdo-web/api/v2/${endpont}?${dtastid}${locid}${dtaCat}${staide}${strtDte}${endate}${sortfield}${sortordr}${lmt}${ofste}`
    console.log(urrl, "\nnow fetching3..")
    fetchit()}

const fetchit4 =()=>{ endpont='locationcategories'
    urrl=`https://www.ncei.noaa.gov/cdo-web/api/v2/${endpont}?${dtastid}${strtDte}${endate}${sortfield}${sortordr}${lmt}${ofste}`
    console.log(urrl, "\nnow fetching4..")
    fetchit()}
    
const fetchit5 =()=>{ endpont='locations'
    urrl=`https://www.ncei.noaa.gov/cdo-web/api/v2/${endpont}?${dtastid}${dtaCat}${locatgid}${strtDte}${endate}${sortfield}${sortordr}${lmt}${ofste}`
    console.log(urrl, "\nnow fetching5..")
    fetchit()}

const fetchit6 =()=>{ endpont='stations'
    urrl=`https://www.ncei.noaa.gov/cdo-web/api/v2/${endpont}?${dtastid}${locid}${dtaCat}${dtaTypId}${extnt}${strtDte}${endate}${sortfield}${sortordr}${lmt}${ofste}`
    console.log(urrl, "\nnow fetching6..")
    fetchit()}

const fetchit7 =()=>{ endpont='data'
    urrl=`https://www.ncei.noaa.gov/cdo-web/api/v2/${endpont}?${dtastid}${dtaTypId}${locid}${staide}${strtDte}${endate}${unts}${sortfield}${sortordr}${lmt}${ofste}${mtadta}`
    console.log(urrl, "\nnow fetching7..")
    if(dtastid==""||strtDte==""||endate==""){window.alert('Please input the required fields to fetch!..'); return}
    fetchit()}

function fetchit()    //PROCess 3:  URL REQUESTING:
    {
    const requ = new Request(urrl, {
        headers: {
          //'Authorization': 'Basic ' + btoa('USER:PASS'),
          token: ''
        },
        //mode: "no-cors"
      })
            
    //PROCess 4:  ASYNC FETCHING:
    async function GETDATA(){  
                try{
                    const respo = await fetch(requ); console.log(respo)
                    const DaTa = await respo.json()//JSON.parse(respo)//returns a promise by converting JSONed-response into JS-object.
            
                    if(respo.status===200){
                        console.log('SuCcEsS', DaTa)
                        let wbpagContnt= JSON.stringify(DaTa)
                        document.write(wbpagContnt)
               /*         const COuntryCard = document.createElement('div');
                        COuntryCard.innerHTML=DaTa //const COuntryCardImg=document.createElement('img')
                   //     document.getElementById('mve').appendChild(DaTa)  
                    
                    const cocktailDiv = document.getElementById("dis1");
                    const cocktailName = DaTa;
                    const heading = document.createElement("dis2");
                    heading.innerHTML = cocktailName;
                    cocktailDiv.appendChild(heading);
           document.getElementById('dis2').appendChild(DaTa)*/
                      
           /*q.2.    WHY THE HELL THE ABOBE STUFF DOESN'T DISPLAY ON WEBPAGE?? ?  */
                   }
                    else{
                        console.log('SeRVER erROR: ', DaTa)
                }
            }
                 catch(err){console.log('FEtch errOR: ', err)}
            }
        
    GETDATA()    //})//promise return '})'

    }//fetchit() END.

    //PROCess 5:  STORE THE DETailsS IN A noSQL DATABASE
    
    //q.3.   WHERE IS MAP DATA BEING ACCESSED?? AS IN THIS LINK: https://www.ncei.noaa.gov/maps/

