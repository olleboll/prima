'use strict';

goog.provide('Blockly.JavaScript.graphics');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['graphics_drawsphere'] = function(block) {
  var value_radius = Blockly.JavaScript.valueToCode(block, 'Radius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'Z', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'translate('+value_x+', '+value_y+', '+value_z+');\n';
  code += 'sphere('+value_radius+');\n';
  code += 'translate('+(-value_x)+', '+(-value_y)+', '+(-value_z)+');\n';
  return code;
};


Blockly.JavaScript['graphics_make_sphere'] = function(block) {
  var value_radie = Blockly.JavaScript.valueToCode(block, 'Radie', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'createSphere('+value_radie+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['graphics_make_cube'] = function(block) {
  var value_length = Blockly.JavaScript.valueToCode(block, 'Length', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'createCube('+value_length+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['graphics_move'] = function(block) {
  var value_objekt = Blockly.JavaScript.valueToCode(block, 'Objekt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'moveSphere('+value_objekt+','+value_x+', '+value_y+', '+value_z+');\n';
  return code;
};

Blockly.JavaScript['graphics_move_object'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = 'moveObject('+value_object+',"'+dropdown_direction+'");\n';
  return code;
};

Blockly.JavaScript['graphics_rotate_object'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = 'rotateObject('+value_object+',"'+dropdown_direction+'");\n';
  return code;
};

Blockly.JavaScript['graphics_pointer'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'createPointer()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['graphics_infinite_flag'] = function(block) {
  var statements_functions = Blockly.JavaScript.statementToCode(block, 'functions');
  // TODO: Assemble JavaScript into code variable.
  
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = 'doInfinite(true);\n';
  code += branch;
  code += 'doInfinite(false);\n';
  return code;
};

Blockly.JavaScript['graphics_move_sim'] = function(block) {
  var statements_functions = Blockly.JavaScript.statementToCode(block, 'functions');
  // TODO: Assemble JavaScript into code variable.
  var value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_ATOMIC);
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = 'combineMoves('+value_object+', true);\n';
  code += branch;
  code += 'combineMoves('+value_object+', true);\n';
  return code;
};


Blockly.JavaScript['graphics_line'] = function(block) {
  var value_dist = Blockly.JavaScript.valueToCode(block, 'dist', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_y = block.getFieldValue('Y');
  var dropdown_x = block.getFieldValue('X');
  var dropdown_z = block.getFieldValue('Z');
  // TODO: Assemble JavaScript into code variable.
  var code = 'createLine('+value_dist+', "'+dropdown_y +'", "'+dropdown_x +'", "'+dropdown_z +'")\n';
  return code;
};

Blockly.JavaScript['graphics_point'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'createPoint()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['graphics_color'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'object', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'setColor('+value_object+','+value_color+');\n';
  return code;
};

Blockly.JavaScript['graphics_get_coordinate'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'getCoordinate('+value_name+',"'+dropdown_name+'")\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};