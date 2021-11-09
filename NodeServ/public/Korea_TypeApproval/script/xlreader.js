var reader = new FileReader();
var excelFileData = null;

var inputElement = document.getElementById("inputExcelRead");
inputElement.addEventListener("change", function () {
    console.log(event.target.files);
    reader.readAsArrayBuffer(event.target.files[0]);
}, false);
document.onpaste = function (pasteEvent) {
    // 첫째 아이템부터 고려 (확장가능)
    var item = pasteEvent.clipboardData.items[0];
    if (item.type.indexOf("image") === 0) {
        var blob = item.getAsFile();
        var reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById("pasteArea_machine_drawing").src = event.target.result;
        };

        reader.readAsDataURL(blob);
    }
}



reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
        type: "array"
    });

    var sheetName = workbook.SheetNames;
    var sheet = workbook.Sheets[sheetName];
    // excelFileData = XLSX.utils.sheet_to_html(sheet);

    // var element = document.getElementsByName("displayDiv");
    // element.innerHTML = excelFileData;

    // document.getElementsByName("applicant_doosan")[0].innerHTML = (sheet["C2"].v);


    // 제원표
    try {
        console.log(sheet["D4"].v);

        document.getElementById("model_name").innerHTML = (sheet["H2"].v);
        document.getElementById("machine_grade").innerHTML = (sheet["H3"].v);
        document.getElementById("operating_weight").innerHTML = (sheet["H4"].v);
        document.getElementById("gearbox").innerHTML = (sheet["H5"].v);
        document.getElementById("travel_speed").innerHTML = (sheet["H6"].v);
        document.getElementById("greadability").innerHTML = (sheet["H7"].v);
        document.getElementById("overall_length").innerHTML = (sheet["H8"].v);
        document.getElementById("overall_width").innerHTML = (sheet["H9"].v);
        document.getElementById("overall_height").innerHTML = (sheet["H10"].v);
        document.getElementById("ground_clearance").innerHTML = (sheet["H11"].v);
        document.getElementById("engine_name").innerHTML = (sheet["H12"].v);
        document.getElementById("engine_power").innerHTML = (sheet["H13"].v);
        document.getElementById("engine_torque").innerHTML = (sheet["H14"].v);
        document.getElementById("engine_cylinder").innerHTML = (sheet["H15"].v);
        document.getElementById("engine_supplier").innerHTML = (sheet["H17"].v);
        document.getElementById("shoe_width").innerHTML = (sheet["H18"].v);
        document.getElementById("track_height").innerHTML = (sheet["H19"].v);
        document.getElementById("track_gap").innerHTML = (sheet["H20"].v);
        document.getElementById("tumbler_distance").innerHTML = (sheet["H21"].v);
        document.getElementById("ground_pressure").innerHTML = (sheet["H23"].v);
        document.getElementById("drum_size").innerHTML = (sheet["H24"].v);
        document.getElementById("tire_radius").innerHTML = (sheet["H25"].v);
        document.getElementById("wheel_base").innerHTML = (sheet["H26"].v);
        document.getElementById("min_turning_raduis").innerHTML = (sheet["H27"].v);
        document.getElementById("braking_distance").innerHTML = (sheet["H28"].v);
        document.getElementById("bucket_struck").innerHTML = (sheet["H29"].v);
        document.getElementById("bucket_heap").innerHTML = (sheet["H30"].v);
        document.getElementById("swing_speed").innerHTML = (sheet["H31"].v);
        document.getElementById("arm_length").innerHTML = (sheet["H32"].v);
        document.getElementById("boom_length").innerHTML = (sheet["H33"].v);
        document.getElementById("digging_depth").innerHTML = (sheet["H34"].v);
        document.getElementById("digging_reach").innerHTML = (sheet["H35"].v);
        document.getElementById("loading_height").innerHTML = (sheet["H36"].v);
        document.getElementById("dozer_size").innerHTML = (sheet["H37"].v);
        document.getElementById("quick_coupler").innerHTML = (sheet["H39"].v);
        document.getElementById("quick_coupler_weight").innerHTML = (sheet["H40"].v);
        document.getElementById("ETC").innerHTML = (sheet["H38"].v);


        if (sheet == null) {
            throw console.log('this value not inputted');
        }
    } catch (e) {
        console.log(e);
    }
    // 변경사양



    // 외관도 치수
    try {
        ;
        document.getElementById("overall_length_d").innerHTML = (sheet["H43"].v);
        document.getElementById("tumbler_distance_d").innerHTML = (sheet["H44"].v);
        document.getElementById("track_length_d").innerHTML = (sheet["H45"].v);
        document.getElementById("overall_height_d").innerHTML = (sheet["H46"].v);
        document.getElementById("overall_width_d").innerHTML = (sheet["H47"].v);
        document.getElementById("shoe_width_d").innerHTML = (sheet["H48"].v);
        document.getElementById("track_width_d").innerHTML = (sheet["H49"].v);
        document.getElementById("track_height_d").innerHTML = (sheet["H50"].v);
        document.getElementById("ground_clearance_d").innerHTML = (sheet["H51"].v);

    } catch (e) {
        console.log(e);
    }

    // 작업범위
    try {
        document.getElementById("digging_height_wr").innerHTML = (sheet["H52"].v);
        document.getElementById("digging_depth_wr").innerHTML = (sheet["H53"].v);
        document.getElementById("digging_reach_wr").innerHTML = (sheet["H54"].v);
        document.getElementById("loading_height_wr").innerHTML = (sheet["H55"].v);

    } catch (e) {
        console.log(e);
    }

    // 퀵커플러 전후
    try {
        document.getElementById("machine_weight_qc").innerHTML=(sheet["H169"].v);
        document.getElementById("machine_weight_woqc").innerHTML=(sheet["H170"].v);
        document.getElementById("digging_reach_qc").innerHTML=(sheet["H171"].v);
        document.getElementById("digging_reach_woqc").innerHTML=(sheet["H172"].v);
        document.getElementById("loading_height_qc").innerHTML=(sheet["H173"].v);
        document.getElementById("loading_height_woqc").innerHTML=(sheet["H174"].v);
        document.getElementById("digging_depth_qc").innerHTML=(sheet["H175"].v);
        document.getElementById("digging_depth_woqc").innerHTML=(sheet["H176"].v);
        document.getElementById("front_axle_load_qc").innerHTML=(sheet["H177"].v);
        document.getElementById("front_axle_load_woqc").innerHTML=(sheet["H178"].v);
        document.getElementById("rear_axle_load_qc").innerHTML=(sheet["H179"].v);
        document.getElementById("rear_axle_load_woqc").innerHTML=(sheet["H180"].v);
        document.getElementById("ground_pressure_qc").innerHTML=(sheet["H181"].v);
        document.getElementById("ground_pressure_woqc").innerHTML=(sheet["H182"].v);
    } catch (e) {
        console.log(e);
    }

    // 접지압
    try {
        document.getElementById("tumbler_distance_g").innerHTML = (sheet["H74"].v);
        document.getElementById("track_length_g").innerHTML = (sheet["H75"].v);
        document.getElementById("grounding_length").innerHTML = (sheet["H76"].v);
        document.getElementById("gross_weight_g").innerHTML = (sheet["H77"].v);
        document.getElementById("shoe_width_g").innerHTML = (sheet["H78"].v);
        document.getElementById("ground_pressure_g").innerHTML = (sheet["H79"].v);
        document.getElementById("gross_weight_woqc_g").innerHTML = (sheet["H80"].v);
        document.getElementById("ground_pressure_woqc_g").innerHTML = (sheet["H81"].v);

    } catch (e) {
        console.log(e);
    }



    // 엔진
    try {
        document.getElementById("engine_supplier_e").innerHTML = (sheet["H58"].v);
        document.getElementById("engine_name_e").innerHTML = (sheet["H59"].v);
        document.getElementById("displacement_e").innerHTML = (sheet["H60"].v);
        document.getElementById("engine_type_e").innerHTML = (sheet["H61"].v);
        document.getElementById("cylinder_arrange_e").innerHTML = (sheet["H62"].v);
        document.getElementById("engine_power_e").innerHTML = (sheet["H63"].v);
        document.getElementById("engine_power_e_si").innerHTML = (sheet["H64"].v);
        document.getElementById("engine_torque_e").innerHTML = (sheet["H65"].v);
        document.getElementById("engine_torque_e_si").innerHTML = (sheet["H66"].v);
        document.getElementById("bore_stroke_e").innerHTML = (sheet["H67"].v);
        document.getElementById("cooling_e").innerHTML = (sheet["H68"].v);
        document.getElementById("compression_ratio_e").innerHTML = (sheet["H69"].v);
        document.getElementById("high_idle_e").innerHTML = (sheet["H70"].v);
        document.getElementById("low_idle_e").innerHTML = (sheet["H71"].v);
    } catch (e) {
        console.log(e);
    }

    // 주행속도
    try {        
        document.getElementById("engine_high_idle_tv").innerHTML=(sheet["H84"].v);
        document.getElementById("pump_displacement").innerHTML=(sheet["H85"].v);
        document.getElementById("motor_displacement").innerHTML=(sheet["H86"].v);
        document.getElementById("reduction_gear_ratio").innerHTML=(sheet["H87"].v);
        document.getElementById("No_teeth").innerHTML=(sheet["H88"].v);
        document.getElementById("link_pitch").innerHTML=(sheet["H89"].v);
        document.getElementById("motor_rpm").innerHTML=(sheet["H90"].v);
        document.getElementById("reduction_rv").innerHTML=(sheet["H91"].v);
        document.getElementById("travel_eff").innerHTML=(sheet["H92"].v);
        document.getElementById("travel_speed_result").innerHTML=(sheet["H93"].v);

        document.getElementById("engine_high_idle_tv_2").innerHTML = (sheet["H84"].v);
        document.getElementById("pump_displacement_2").innerHTML = (sheet["H85"].v);
        document.getElementById("motor_displacement_2").innerHTML = (sheet["H86"].v);
        document.getElementById("reduction_gear_ratio_2").innerHTML = (sheet["H87"].v);
        document.getElementById("No_teeth_2").innerHTML = (sheet["H88"].v);
        document.getElementById("link_pitch_2").innerHTML = (sheet["H89"].v);
        document.getElementById("motor_rpm_2").innerHTML = (sheet["H90"].v);
        document.getElementById("reduction_rv_2").innerHTML = (sheet["H91"].v);
        document.getElementById("travel_eff_2").innerHTML = (sheet["H92"].v);
        document.getElementById("travel_speed_result_2").innerHTML = (sheet["H93"].v);

        document.getElementById("motor_rpm_3").innerHTML = (sheet["H90"].v);
        document.getElementById("reduction_rv_3").innerHTML = (sheet["H91"].v);        
        



    } catch (e) {
        console.log(e);
    }

    // 선회 속도
    try {
        // 선회시 펌프의 토출량
        document.getElementById("engine_high_idle_2").innerHTML = (sheet["H84"].v);
        document.getElementById("pump_displacement_2").innerHTML = (sheet["H85"].v);
        document.getElementById("motor_oil_flow_sw").innerHTML = (sheet["H102"].v);

        // 선회모터 회전수 
        document.getElementById("motor_oil_flow_sw_2").innerHTML=(sheet["H96"].v);
        document.getElementById("displacement_sw").innerHTML=(sheet["H97"].v);
        document.getElementById("motor_speed_sw").innerHTML=(sheet["H98"].v);

        // 선회속도
        document.getElementById("swing_effeciency_sw").innerHTML=(sheet["H105"].v);
        document.getElementById("output_speed_sw").innerHTML=(sheet["H101"].v);
        document.getElementById("pinion_gear_sw").innerHTML=(sheet["H102"].v);
        document.getElementById("swing_bearing_sw").innerHTML=(sheet["H103"].v);
        document.getElementById("swing_speed_sw").innerHTML=(sheet["H106"].v);


        // 테이블

        document.getElementById("motor_oil_flow_sw_3").innerHTML=(sheet["H96"].v);
        document.getElementById("displacement_sw_2").innerHTML=(sheet["H97"].v);
        document.getElementById("motor_speed_sw_2").innerHTML=(sheet["H98"].v);
        document.getElementById("input_speed_sw").innerHTML=(sheet["H99"].v);
        document.getElementById("gear_ratio_1_sw").innerHTML=(sheet["H100"].v);
        document.getElementById("output_speed_sw_2").innerHTML=(sheet["H101"].v);
        document.getElementById("pinion_gear_sw_2").innerHTML=(sheet["H102"].v);
        document.getElementById("swing_bearing_sw_2").innerHTML=(sheet["H103"].v);
        document.getElementById("gear_ratio_2_sw").innerHTML=(sheet["H104"].v);
        document.getElementById("swing_effeciency_sw").innerHTML=(sheet["H105"].v);
        document.getElementById("swing_speed_sw_2").innerHTML=(sheet["H106"].v);        



    } catch (e) {
        console.log(e);
    }



    // 경사지 등판
    try {
        document.getElementById("operating_weight_t").innerHTML=(sheet["H109"].v);
        document.getElementById("grade_relief_valve_pressure").innerHTML=(sheet["H110"].v);
        document.getElementById("brake_torque").innerHTML=(sheet["H111"].v);
        document.getElementById("reduction_gear_ratio_g").innerHTML=(sheet["H112"].v);
        document.getElementById("sprocket_PCD_g").innerHTML=(sheet["H113"].v);
        document.getElementById("parking_force").innerHTML=(sheet["H114"].v);
        document.getElementById("motor_displacement_g").innerHTML=(sheet["H115"].v);
        document.getElementById("reduction_ratio").innerHTML=(sheet["H116"].v);
        document.getElementById("traction_force").innerHTML=(sheet["H117"].v);
        document.getElementById("greadability_g").innerHTML=(sheet["H119"].v);
        document.getElementById("slippery_horizontal").innerHTML=(sheet["H120"].v);
        document.getElementById("drag_resist").innerHTML=(sheet["H122"].v);
        document.getElementById("friction").innerHTML=(sheet["H123"].v);
        document.getElementById("slippery_grade").innerHTML=(sheet["H124"].v);
        document.getElementById("torque_required").innerHTML=(sheet["H125"].v);
        document.getElementById("angle_greadable").innerHTML=(sheet["H126"].v);
        document.getElementById("torque_ratio").innerHTML=(sheet["H127"].v);

        document.getElementById("operating_weight_t_2").innerHTML=(sheet["H109"].v);
        document.getElementById("operating_weight_t_3").innerHTML=(sheet["H109"].v);
        document.getElementById("operating_weight_t_4").innerHTML=(sheet["H109"].v);
        document.getElementById("grade_relief_valve_pressure_2").innerHTML=(sheet["H110"].v);
        document.getElementById("brake_torque_2").innerHTML=(sheet["H111"].v);
        document.getElementById("reduction_gear_ratio_g_2").innerHTML=(sheet["H112"].v);
        document.getElementById("reduction_gear_ratio_g_3").innerHTML=(sheet["H112"].v);
        document.getElementById("sprocket_PCD_g_2").innerHTML=(sheet["H113"].v);
        document.getElementById("sprocket_PCD_g_3").innerHTML=(sheet["H113"].v);

        document.getElementById("parking_force").innerHTML=(sheet["H114"].v);
        document.getElementById("motor_displacement_g_2").innerHTML=(sheet["H115"].v);
        document.getElementById("reduction_ratio_2").innerHTML=(sheet["H116"].v);
        document.getElementById("traction_force_2").innerHTML=(sheet["H117"].v);
        document.getElementById("traction_force_3").innerHTML=(sheet["H117"].v);
        document.getElementById("greadability_g_2").innerHTML=(sheet["H119"].v);
        // document.getElementById("slippery_horizontal").innerHTML=(sheet["H120"].v);
        document.getElementById("slippery_vertical").innerHTML=(sheet["H121"].v);

        document.getElementById("slippery_vertical_2").innerHTML=(sheet["H121"].v);
        document.getElementById("drag_resist").innerHTML=(sheet["H122"].v);
        document.getElementById("friction").innerHTML=(sheet["H123"].v);
        document.getElementById("slippery_grade_2").innerHTML=(sheet["H124"].v);
        document.getElementById("torque_required_3").innerHTML=(sheet["H125"].v);
        document.getElementById("angle_greadable_2").innerHTML=(sheet["H126"].v);
        document.getElementById("torque_ratio_2").innerHTML=(sheet["H127"].v);
        // document.getElementById("torque_sufficient").innerHTML=(sheet["H128"].v);



    } catch (e) {
        console.log(e);
    }
    // 전도안정성
    try {
        document.getElementById("COG_to_BKT").innerHTML=(sheet["H130"].v);
        document.getElementById("COG_to_track").innerHTML=(sheet["H131"].v);
        document.getElementById("weight_upperstructure").innerHTML=(sheet["H132"].v);
        document.getElementById("COG_upperstructure").innerHTML=(sheet["H133"].v);
        document.getElementById("weight_understructure").innerHTML=(sheet["H134"].v);
        document.getElementById("COG_understructure").innerHTML=(sheet["H135"].v);
        document.getElementById("weight_attach").innerHTML=(sheet["H136"].v);
        document.getElementById("COG_attach").innerHTML=(sheet["H137"].v);
        document.getElementById("gross_weight_s").innerHTML=(sheet["H138"].v);
        document.getElementById("COG_gross").innerHTML=(sheet["H139"].v);
        document.getElementById("excavating_limit").innerHTML=(sheet["H140"].v);
        document.getElementById("bucket_capacity").innerHTML=(sheet["H141"].v);

        document.getElementById("bucket_heap_2").innerHTML=(sheet["H30"].v);
        document.getElementById("excavating_limit_2").innerHTML = (sheet["H140"].v);
        document.getElementById("bucket_capacity_2").innerHTML = (sheet["H141"].v);


    } catch (e) {
        console.log(e);
    }

    // 분해수송
    try {
        document.getElementById("overall_length_t").innerHTML = (sheet["H155"].v);
        document.getElementById("overall_width_t").innerHTML = (sheet["H156"].v);
        document.getElementById("overall_height_t").innerHTML = (sheet["H157"].v);
        document.getElementById("overall_weight_t").innerHTML = (sheet["H158"].v);
        document.getElementById("trailer_length_t").innerHTML = (sheet["H159"].v);
        document.getElementById("trailer_width_t").innerHTML = (sheet["H160"].v);
        document.getElementById("trailer_height_t").innerHTML = (sheet["H161"].v);
        document.getElementById("trailer_weight_t").innerHTML = (sheet["H162"].v);
        document.getElementById("transport_length_t").innerHTML = (sheet["H163"].v);
        document.getElementById("transport_width_t").innerHTML = (sheet["H164"].v);
        document.getElementById("transport_height_t").innerHTML = (sheet["H165"].v);
        document.getElementById("transport_weight_t").innerHTML = (sheet["H166"].v);
        document.getElementById("limit_length_t").innerHTML = (sheet["H167"].v);
        document.getElementById("limit_width_t").innerHTML = (sheet["H168"].v);
        document.getElementById("limit_height_t").innerHTML = (sheet["H169"].v);
        document.getElementById("limit_weight_t").innerHTML = (sheet["H170"].v);
        document.getElementById("trailer_1_weight").innerHTML = (sheet["H171"].v);
        document.getElementById("trailer_1_subs").innerHTML = (sheet["H172"].v);
        document.getElementById("trailer_2_weight").innerHTML = (sheet["H173"].v);
        document.getElementById("trailer_2_subs").innerHTML = (sheet["H174"].v);
        document.getElementById("truck_1_weight").innerHTML = (sheet["H175"].v);
        document.getElementById("truck_1_subs").innerHTML = (sheet["H176"].v);
        document.getElementById("truck_2_weight").innerHTML = (sheet["H177"].v);
        document.getElementById("truck_2_subs").innerHTML = (sheet["H178"].v);


    } catch (e) {
        console.log(e);
    }



};