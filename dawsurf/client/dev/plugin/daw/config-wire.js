(function(){var e;e={plugins:[{module:"lib.3p.extension/cujojs/wire/coupler"},{module:"lib.3p.extension/cujojs/wire/profiler"},{module:"wire/sizzle"}],box:{module:"plugin/element/box",connect:{auto_expand:{box_generator:"on_ready"},create:{box_generator:"on_box_create"},init:{desk:"on_init"}}},box_generator:{module:"plugin/layout/box.generator",connect:{init:{desk:"on_init"},add_group:{model_group:"on_add"},add_param:{sys_msg_entity_param:"on_add"},generate:{model_device:"on_ready"}}},cell_arranger:{module:"plugin/layout/cell.arranger",connect:{arrange_track:{track_sizer_x:"on_track_resize"}}},desk:{module:"plugin/element/desk",connect:{init:{input_tapper:"on_init"},kill:{input_tapper:"on_kill"},resize:{lib_platform_window:"on_zoom",track_sizer_x:"on_resize"}}},device:{module:"plugin/element/device",connect:{add_box:{box_generator:"on_box_add"},ready:{box_generator:"on_ready"},init:{desk:"on_init"},add:{model_device:"on_add"},clear:{model_device:"on_clear"},insert:{model_device:"on_insert"},move:{model_device:"on_move"},remove:{model_device:"on_remove"},rename:{model_device:"on_rename"},bypass:{signal_device_bypass:"on_bypass"}}},devices:{module:"plugin/element/devices",connect:{add:{device:"on_added"},remove:{device:"on_remove"},create:{track:"on_added"}}},engine_blinker:{module:"plugin/engine/blinker",connect:{init:{controller_surface:"on_init"},kill:{controller_surface:"on_kill"}}},group:{module:"plugin/element/group",connect:{add:{box_generator:"on_group_add"},create:{box:"on_group_create"},auto_expand:{box_generator:"on_ready"},init:{desk:"on_init"}}},gutter:{module:"plugin/element/gutter",connect:{add:{track:"on_added"},collapse:{track:"on_collapse"},init:{track:"on_init"},insert:{track:"on_inserted"},move:{track:"on_move"},remove:{track:"on_remove"}}},input_tapper:{module:"plugin/input/tapper",connect:{init:{root:"on_init"},kill:{root:"on_kill"}}},lib_boot:{module:"plugin/boot-lib",connect:{init:{controller_surface:"on_init"},kill:{controller_surface:"on_kill"}}},lib_ui_viewport:{module:"plugin/lib/ui/viewport"},mixer:{module:"plugin/element/mixer",connect:{create:{track:"on_added"}}},model_device:{module:"plugin/model/device"},model_folder:{module:"plugin/model/folder",connect:{add:{sys_msg_entity_folder:"on_add"},clear:{sys_msg_entity_folder:"on_clear"},insert:{sys_msg_entity_folder:"on_insert"},move:{sys_msg_entity_folder:"on_move"},ready:{sys_msg_entity_folder:"on_ready"},remove:{sys_msg_entity_folder:"on_remove"},rename:{sys_msg_entity_folder:"on_rename"}}},model_group:{module:"plugin/model/group"},model_track:{module:"plugin/model/track"},param:{module:"plugin/element/param",connect:{init:{lib_boot:"on_init"},disable_sensor:{param_slider:"on_input_start"},enable_sensor:{param_slider:"on_input_stop"},rename:{sys_msg_entity_param:"on_rename"},revalue:{sys_msg_entity_param:"on_revalue"}}},param_trigger:{module:"plugin/input/param/trigger",connect:{touch_start:{param:"on_touch_start"},touch_tap:{param:"on_touch_tap"}}},param_trigger_router:{module:"plugin/input/param/trigger.router",connect:{trigger:{param_trigger:"on_trigger"},sys_msg_engine:{update_param:"on_value_change"}}},param_slider:{module:"plugin/element/param.slider",properties:{_div_root:{$ref:"dom.query!.panel",i:0}},connect:{start_input:{param_trigger_router:"on_trigger"},stop_input:{desk:["on_tap","on_touch_stop"],lib_platform_window:["on_resize","on_zoom"],param_trigger_router:"on_value_change"},sys_msg_engine:{update_param:"on_value_change"}}},root:{module:"plugin/element/root",properties:{_div_root:{$ref:"dom.query!.panel",i:0}},connect:{init:{lib_boot:"on_init"},kill:{controller_surface:"on_kill"},resize:{lib_platform_window:["on_resize","on_zoom"],track_sizer_x:"on_resize"},sys_msg_engine:{load:"on_init_complete"},lib_ui_blocker:{disable_context_menu:"on_init",enable_context_menu:"on_kill"}}},signal_device_bypass:{module:"plugin/signal/device-bypass",connect:{add_group:{model_group:"on_add"},add_param:{sys_msg_entity_param:"on_add"},refresh:{sys_msg_entity_param:"on_revalue"},ready_device:{model_device:"on_ready"},remove_device:{model_device:"on_remove"}}},toolbar:{module:"plugin/element/toolbar",properties:{_div_root:{$ref:"dom.query!.panel",i:0}},connect:{init:{root:"on_init"},kill:{root:"on_kill"},toggle:{desk:"on_tap"},sys_msg_engine:{stop:"on_exit"},view_growler:{growl:"on_growl"}}},track:{module:"plugin/element/track",connect:{init:{tracks:"on_init"},disable:{devices:"on_kill"},enable:{devices:"on_init"},add:{model_track:"on_add"},insert:{model_track:"on_insert"},move:{model_track:"on_move"},remove:{model_track:"on_remove"},rename:{model_track:"on_rename"},expand:{gutter:"on_expand"}}},tracks:{module:"plugin/element/tracks",connect:{init:{desk:"on_init"},kill:{desk:"on_kill"},append:{track:"on_add"}}},track_sizer_x:{module:"plugin/layout/track.sizer-x",connect:{resize:{box:"on_toggle",device:"on_toggle",group:"on_toggle",lib_platform_window:["on_resize","on_zoom"],track:"on_toggle",gutter:"on_add_first"}}},track_sizer_y:{module:"plugin/layout/track.sizer-y",connect:{resize:{box:"on_toggle",device:"on_toggle",group:"on_toggle",lib_platform_window:["on_resize","on_zoom"],track:"on_toggle",gutter:"on_add_first"}}}};define(e)}).call(this);