'use strict';

goog.provide('Blockly.Blocks.graphics');

goog.require('Blockly.Blocks');

Blockly.Blocks['graphics_drawsphere'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sfär");
    this.appendValueInput("Radius")
        .setCheck("Number")
        .appendField("Radie");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("Z")
        .setCheck("Number")
        .appendField("Z");;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_make_sphere'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sfär");
    this.appendValueInput("Radie")
        .setCheck("Number")
        .appendField("Radie");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_make_cube'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Kub");
    this.appendValueInput("Length")
        .setCheck("Number")
        .appendField("Längd");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flytta");
    this.appendValueInput("Objekt")
        .setCheck(null)
        .appendField("Objekt");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("Z");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_move_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flytta");
    this.appendValueInput("Object")
        .setCheck(null)
        .appendField("Objekt");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Upp", "up"], ["Ner", "down"], ["Höger", "right"], ["Vänster", "left"], ["In", "in"], ["Ut", "out"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_rotate_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotera");
    this.appendValueInput("Object")
        .setCheck(null)
        .appendField("Objekt");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Upp", "up"], ["Ner", "down"], ["Höger", "right"], ["Vänster", "left"], ["In", "in"], ["Ut", "out"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_pointer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pekare");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_infinite_flag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Oändlig rörelse");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_move_sim'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flytta");
    this.appendValueInput("Object")
        .setCheck(null)
        .appendField("Objekt");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['controls_repeat_ext'] = {
  /**
   * Block for repeat n times (external number).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  }
};

Blockly.Blocks['graphics_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Skapa Linje");
    this.appendValueInput("dist")
        .setCheck(null)
        .appendField("Längd");
    this.appendDummyInput()
        .appendField("y=")
        .appendField(new Blockly.FieldDropdown([["0", "noTilt"], ["1", "1"], ["-1", "-1"], ["x", "xfunc"], ["z", "zfunc"], ["sin", "sin"]]), "Y");
    this.appendDummyInput()
        .appendField("x=")
        .appendField(new Blockly.FieldDropdown([["0", "noTilt"], ["1", "1"], ["-1", "-1"], ["y", "yfunc"], ["z", "zfunc"], ["sin", "sin"]]), "X");
    this.appendDummyInput()
        .appendField("z=")
        .appendField(new Blockly.FieldDropdown([["0", "noTilt"], ["1", "1"], ["-1", "-1"], ["x", "xfunc"], ["y", "yfunc"], ["sin", "sin"]]), "Z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_point'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Punkt");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ändra färg");
    this.appendValueInput("object")
        .setCheck(null)
        .appendField("Objekt");
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("Färg");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['graphics_get_coordinate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hämta")
        .appendField(new Blockly.FieldDropdown([["x", "X"], ["y", "Y"], ["z", "Z"]]), "NAME")
        .appendField("koordinat");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Objekt");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};