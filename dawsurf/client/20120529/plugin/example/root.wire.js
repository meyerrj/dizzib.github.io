(function(){define({plugins:[{module:"lib.3p.extension/cujojs/wire/coupler"},{module:"lib.3p.extension/cujojs/wire/profiler"},{module:"wire/dom"},{module:"wire/sizzle"}],root:{module:"plugin/root",profiler:{active:!0},properties:{_div_root:{$ref:"dom.query!.panel",i:0}},connect:{init:{controller_surface:"on_init"},add:{sys_msg_entity_folder:"on_add"},insert:{sys_msg_entity_folder:"on_insert"},move:{sys_msg_entity_folder:"on_move"},ready:{sys_msg_entity_folder:"on_ready"},remove:{sys_msg_entity_folder:"on_remove"},rename:{sys_msg_entity_folder:"on_rename"},sys_msg_engine:{load:"on_init"}}}})}).call(this);