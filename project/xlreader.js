
    var reader = new FileReader();
    var excelFileData = null; 

    var inputElement = document.getElementById("inputExcelRead");
    inputElement.addEventListener("change", function(){
        console.log(event.target.files);
        reader.readAsArrayBuffer(event.target.files[0]);
    }, false);
  
    
    reader.onload = function(e){
        var data = e.target.result;
        var workbook = XLSX.read(data, {type: "array"});

        var sheetName = workbook.SheetNames;
        var sheet = workbook.Sheets[sheetName];
        // excelFileData = XLSX.utils.sheet_to_html(sheet);

        // var element = document.getElementsByName("displayDiv");
        // element.innerHTML = excelFileData;

        // document.getElementsByName("applicant_doosan")[0].innerHTML = (sheet["C2"].v);
        
        
        // 제원표
        try {   
            console.log(sheet["D4"].v);
            
            document.getElementsByName("model_name")[0].innerText=(sheet["D4"].v);    
            document.getElementsByName("machine_grade")[0].innerHTML=(sheet["D5"].v);
            document.getElementsByName("operating_weight")[0].innerHTML=(sheet["D6"].v);
            document.getElementsByName("gearbox")[0].innerHTML=(sheet["D7"].v);
            document.getElementsByName("travel_speed")[0].innerHTML=(sheet["D8"].v);
            document.getElementsByName("greadability")[0].innerHTML=(sheet["D9"].v);
            document.getElementsByName("overall_length")[0].innerHTML=(sheet["D10"].v);
            document.getElementsByName("overall_width")[0].innerHTML=(sheet["D11"].v);
            document.getElementsByName("overall_height")[0].innerHTML=(sheet["D12"].v);
            document.getElementsByName("ground_clearance")[0].innerHTML=(sheet["D13"].v);
            document.getElementsByName("engine_name")[0].innerHTML=(sheet["D14"].v);
            document.getElementsByName("engine_power")[0].innerHTML=(sheet["D15"].v);
            document.getElementsByName("engine_torque")[0].innerHTML=(sheet["D16"].v);
            document.getElementsByName("engine_cylinder")[0].innerHTML=(sheet["D17"].v);            
            document.getElementsByName("engine_supplier")[0].innerHTML=(sheet["D19"].v);
            document.getElementsByName("shoe_width")[0].innerHTML=(sheet["D20"].v);
            document.getElementsByName("track_height")[0].innerHTML=(sheet["D21"].v);
            document.getElementsByName("track_gap")[0].innerHTML=(sheet["D22"].v);
            document.getElementsByName("tumbler_distance")[0].innerHTML=(sheet["D23"].v);
            document.getElementsByName("ground_pressure")[0].innerHTML=(sheet["D24"].v);
            // document.getElementsByName("drum")[0].innerHTML=(sheet["D25"].v);
            // document.getElementsByName("tire")[0].innerHTML=(sheet["D26"].v);
            // document.getElementsByName("axis_distance")[0].innerHTML=(sheet["D27"].v);
            // document.getElementsByName("swing_radius")[0].innerHTML=(sheet["D28"].v);
            // document.getElementsByName("stop_distance")[0].innerHTML=(sheet["D29"].v);
            document.getElementsByName("bucket_struck")[0].innerHTML=(sheet["D30"].v);
            document.getElementsByName("swing_speed")[0].innerHTML=(sheet["D31"].v);
            document.getElementsByName("boom_length")[0].innerHTML=(sheet["D32"].v);
            document.getElementsByName("digging_depth")[0].innerHTML=(sheet["D33"].v);
            document.getElementsByName("bucket_heap")[0].innerHTML=(sheet["D34"].v);
            document.getElementsByName("arm_length")[0].innerHTML=(sheet["D35"].v);
            document.getElementsByName("digging_reach")[0].innerHTML=(sheet["D36"].v);
            document.getElementsByName("digging_height")[0].innerHTML=(sheet["D37"].v);
            document.getElementsByName("dozer_size")[0].innerHTML=(sheet["D38"].v);
            document.getElementsByName("")[0].innerHTML=(sheet["D39"].v);
            if (sheet==null)   {
                throw console.log('this value not inputted');
            }
        } catch (e) {
            console.log(e);      
        }
        // 변경사양

        // 엔진
        try {            ;            
            document.getElementsByName("engine_supplier")[1].innerHTML=(sheet["D83"].v);  
            document.getElementsByName("engine_name")[1].innerHTML=(sheet["D84"].v);   
            document.getElementsByName("displacement")[0].innerHTML=(sheet["D85"].v);
            document.getElementsByName("engine_type")[0].innerHTML=(sheet["D86"].v);
            document.getElementsByName("cylinder_arrange")[0].innerHTML=(sheet["D87"].v);
            document.getElementsByName("engine_power")[1].innerHTML=(sheet["D88"].v);
            document.getElementsByName("engine_torque")[1].innerHTML=(sheet["D89"].v);
            document.getElementsByName("bore_stroke")[0].innerHTML=(sheet["D90"].v);
            document.getElementsByName("cooling")[0].innerHTML=(sheet["D91"].v);
            document.getElementsByName("compression_ratio")[0].innerHTML=(sheet["D92"].v);
            document.getElementsByName("high_idle")[0].innerHTML=(sheet["D93"].v);
            document.getElementsByName("low_idle")[0].innerHTML=(sheet["D94"].v);
        } catch (e) {
            console.log(e);
        }
        // 주행속도
        try {
            document.getElementsByName("engine_high_idle")[1].innerHTML=(sheet["D104"].v);
            document.getElementsByName("pump_displacement")[0].innerHTML=(sheet["D105"].v);
            document.getElementsByName("relief_valve_pressure")[0].innerHTML=(sheet["D106"].v);
            document.getElementsByName("motor_displacement")[0].innerHTML=(sheet["D107"].v);
            document.getElementsByName("reduction_gear_ratio")[0].innerHTML=(sheet["D108"].v);
            document.getElementsByName("sprocket_PCD")[0].innerHTML=(sheet["D109"].v);
            document.getElementsByName("No_teeth")[0].innerHTML=(sheet["D110"].v);
            document.getElementsByName("No_link")[0].innerHTML=(sheet["D111"].v);
            document.getElementsByName("link_pitch")[0].innerHTML=(sheet["D112"].v);
            document.getElementsByName("motor_rpm")[0].innerHTML=(sheet["D113"].v);
            document.getElementsByName("motor_torque")[0].innerHTML=(sheet["D114"].v);
            document.getElementsByName("reduction_gear_rpm")[0].innerHTML=(sheet["D115"].v);
            document.getElementsByName("reduction_gear_torque")[0].innerHTML=(sheet["D116"].v);
            document.getElementsByName("speed_expct")[0].innerHTML=(sheet["D117"].v);
            document.getElementsByName("speed_eff")[0].innerHTML=(sheet["D118"].v);
            document.getElementsByName("speed_result")[0].innerHTML=(sheet["D119"].v);
           
            
        } catch (e) {
            console.log(e);
        }
    };