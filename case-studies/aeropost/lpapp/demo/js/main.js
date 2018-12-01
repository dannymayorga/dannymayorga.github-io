var global_lang_select_option = "Seleccione opción";

function cambiopais(el){
	$('#entrega').prop('checked', false);
	switch(el){
		case 'SCL':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/SCL_files/TermsAndConditionsForService_SCL.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/SCL_files/TermsAndConditionsForService_SCL.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/SCL_files/TermsAndConditionsForService_SCL.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/SCL_files/TermsAndConditionsForService_SCL.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/SCL_files/TermsAndConditionsForService_SCL.htm");
		break;
		case 'SJO':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/SJO_files/TermsAndConditionsForService_SJO.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/SJO_files/TermsAndConditionsForService_SJO.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/SJO_files/TermsAndConditionsForService_SJO.htm");
        $('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/SJO_files/TermsAndConditionsForService_SJO.htm");
        $('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/SJO_files/TermsAndConditionsForService_SJO.htm");
		break;
		case 'SAL':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/SAL_files/TermsAndConditionsForService_SAL.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/SAL_files/TermsAndConditionsForService_SAL.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/SAL_files/TermsAndConditionsForService_SAL.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/SAL_files/TermsAndConditionsForService_SAL.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/SAL_files/TermsAndConditionsForService_SAL.htm");
		break;
		case 'GUA':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/GUA_files/TermsAndConditionsForService_GUA.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/GUA_files/TermsAndConditionsForService_GUA.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/GUA_files/TermsAndConditionsForService_GUA.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/GUA_files/TermsAndConditionsForService_GUA.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/GUA_files/TermsAndConditionsForService_GUA.htm");
		break;
		case 'SAP':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/SAP_files/TermsAndConditionsForService_SAP.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/SAP_files/TermsAndConditionsForService_SAP.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/SAP_files/TermsAndConditionsForService_SAP.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/SAP_files/TermsAndConditionsForService_SAP.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/SAP_files/TermsAndConditionsForService_SAP.htm");
		break;
		case 'TEG':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/TEG_files/TermsAndConditionsForService_TEG.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/TEG_files/TermsAndConditionsForService_TEG.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/TEG_files/TermsAndConditionsForService_TEG.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/TEG_files/TermsAndConditionsForService_TEG.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/TEG_files/TermsAndConditionsForService_TEG.htm");
		break;
		case 'MAG':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/MGA_files/TermsAndConditionsForService_MGA.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/MGA_files/TermsAndConditionsForService_MGA.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/MGA_files/TermsAndConditionsForService_MGA.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/MGA_files/TermsAndConditionsForService_MGA.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/MGA_files/TermsAndConditionsForService_MGA.htm");
		break;
		case 'PTY':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/PTY_files/TermsAndConditionsForService_PTY.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/PTY_files/TermsAndConditionsForService_PTY.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/PTY_files/TermsAndConditionsForService_PTY.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/PTY_files/TermsAndConditionsForService_PTY.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/PTY_files/TermsAndConditionsForService_PTY.htm");
		break;
		case 'LIM':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/LIM_files/TermsAndConditionsForService_LIM.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/LIM_files/TermsAndConditionsForService_LIM.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/LIM_files/TermsAndConditionsForService_LIM.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/LIM_files/TermsAndConditionsForService_LIM.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/LIM_files/TermsAndConditionsForService_LIM.htm");
		break;
		case 'SDQ':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/SDQ_files/TermsAndConditionsForService_SDQ.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/SDQ_files/TermsAndConditionsForService_SDQ.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/SDQ_files/TermsAndConditionsForService_SDQ.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/SDQ_files/TermsAndConditionsForService_SDQ.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/SDQ_files/TermsAndConditionsForService_SDQ.htm");
		break;
		case 'SVD':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/SVD_files/TermsAndConditionsForService_SVD.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/SVD_files/TermsAndConditionsForService_SVD.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/SVD_files/TermsAndConditionsForService_SVD.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/SVD_files/TermsAndConditionsForService_SVD.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/SVD_files/TermsAndConditionsForService_SVD.htm");
		break;
		case 'SLU':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/SLU_files/TermsAndConditionsForService_SLU.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/SLU_files/TermsAndConditionsForService_SLU.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/SLU_files/TermsAndConditionsForService_SLU.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/SLU_files/TermsAndConditionsForService_SLU.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/SLU_files/TermsAndConditionsForService_SLU.htm");
		break;
		case 'POS':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/POS_files/TermsAndConditionsForService_POS.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/POS_files/TermsAndConditionsForService_POS.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/POS_files/TermsAndConditionsForService_POS.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/POS_files/TermsAndConditionsForService_POS.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/POS_files/TermsAndConditionsForService_POS.htm");
		break;
		case 'BOG':
		$('#terminosycond').attr("href", "https://www.myaeropost.com/SignUp/BOG_files/TermsAndConditionsForService_BOG.htm");
		$('#terms').attr("href", "https://www.myaeropost.com/SignUp/BOG_files/TermsAndConditionsForService_BOG.htm");
		$('#terms_eng').attr("href", "https://www.myaeropost.com/SignUp/BOG_files/TermsAndConditionsForService_BOG.htm");
		$('#terms-m').attr("href", "https://www.myaeropost.com/SignUp/BOG_files/TermsAndConditionsForService_BOG.htm");
		$('#terms-m_eng').attr("href", "https://www.myaeropost.com/SignUp/BOG_files/TermsAndConditionsForService_BOG.htm");
		break;
		default:
		$('#terminosycond').attr("href", "#");
	}


//tipoid();
}

function infodomicilio() {
	var country_with_regions = ["BOG", "SCL", "LIM", "ECU"];
	var country_code = $('#id_country').find(":selected").val();

	if (country_with_regions.indexOf(country_code) > -1) {
        $('#provset').hide();
        $('#ciuset').hide();
        $('#provset2').hide();
        $('#ciuset2').hide();
        $('#provsetchoice').show();
        $('#ciusetchoice').show();
	} else {
		$('#provset').show();
        $('#ciuset').show();
    	$('#provset2').show();
		$('#ciuset2').show();
        $('#provsetchoice').hide();
        $('#ciusetchoice').hide();
	}

	// clean id_local_store
	$('#counterset').hide();
	$('#dirset').show();
	// Second Batch to Hide Show
	$('#counterset2').hide();
	$('#dirset2').show();
}

function infosucursal(){
	// clean values
	$('#provset').hide();
	$('#ciuset').hide();
	$('#provsetchoice').hide();
	$('#ciusetchoice').hide();
	$('#dirset').hide();
	$('#id_province').val('');
	$('#id_city').val('');
	$('#id_address').val('');
	$('#counterset').show();
	// Second Batch to Hide Show
	$('#provset2').hide();
	$('#ciuset2').hide();
	$('#provsetchoice2').hide();
	$('#ciusetchoice2').hide();
	$('#dirset2').hide();
	$('#id_province2').val('');
	$('#id_city2').val('');
	$('#id_address2').val('');
	$('#counterset2').show();
}

function getidtypes(csrf_token, country_code, base_url) {
	final_url = base_url + "ajax_get_types/";
	$.ajax({
		url : final_url,
		type : "POST",
		dataType: "json",
		data : {
			country : country_code,
			csrfmiddlewaretoken: csrf_token,
		},
		beforeSend: function() {
			$("#id_type_of_id").find("option").remove();
			$('#id_type_of_id').append(new Option('...',''));
		},
		success : function(json) {
			$("#id_type_of_id").find("option").remove();
			for (var i = 0; i < json.length; i++) {
				$("#id_type_of_id").append(new Option(json[i].text, json[i].value));
			}
		},
		error : function(xhr,errmsg,err) {
			$('#id_type_of_id').append(new Option('Please reload page',''));
		}
	});
}

function getsucursal(csrf_token, country_code, base_url) {
	final_url = base_url + "ajax_get_counters/";
	$.ajax({
		url : final_url,
		type : "POST",
		dataType: "json",
		data : {
			country : country_code,
			csrfmiddlewaretoken: csrf_token,
		},
		success : function(json) {
			$("#id_local_store").find("option").remove();
			for (var i = 0; i < json.length; i++) {
				$("#id_local_store").append(new Option(json[i].name, json[i].counter_id));
			}
			$('#id_counter_name').val($('#id_local_store option:selected').text());
		},
		error : function(xhr,errmsg,err) {
			console.log('oops')
		}
	});
}

function getregions(csrf_token, country_code, base_url) {
	final_url = base_url + "ajax_get_regions/";
	$.ajax({
		url : final_url,
		type : "POST",
		dataType: "json",
		data : {
			country : country_code,
			csrfmiddlewaretoken: csrf_token,
		},
		beforeSend : function() {
			$("#id_province_choice").find("option").remove();
			$("#id_province_choice").append(new Option("...", ''));

			$("#id_city_choice").find("option").remove();
			$("#id_city_choice").append(new Option("...", ''));
		},
		success : function(json) {
			$("#id_province_choice").find("option").remove();
			$("#id_province_choice").append(new Option(global_lang_select_option, ''));
			for (var i = 0; i < json.length; i++) {
				$("#id_province_choice").append(new Option(json[i].territory_name, json[i].territory_id));
			}
		},
		error : function(xhr,errmsg,err) {
			console.log('oops')
		}
	});
}

function getcities(csrf_token, region_id, region_name, base_url) {
	final_url = base_url + "ajax_get_cities/";
	$.ajax({
		url : final_url,
		type : "POST",
		dataType: "json",
		data : {
			region : region_id,
			region_name: region_name,
			csrfmiddlewaretoken: csrf_token,
		},
		beforeSend : function() {
			$("#id_city_choice").find("option").remove();
			$("#id_city_choice").append(new Option("...", ''));
		},
		success : function(json) {
			$("#id_city_choice").find("option").remove();
			for (var i = 0; i < json.length; i++) {
				$("#id_city_choice").append(new Option(json[i].territory_name, json[i].territory_id));
			}
		},
		error : function(xhr,errmsg,err) {
			console.log('oops')
		}
	});
}
