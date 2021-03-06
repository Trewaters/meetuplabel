// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Layout = require("./Layout.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Server = require("react-dom/server");

var component = ReasonReact.statelessComponent("ConfigPage");

function make($$event, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", undefined, ReasonReact.element(undefined, undefined, Layout.make(/* array */[
                                  React.createElement("h2", undefined, "Config"),
                                  React.createElement("form", {
                                        action: "/config/save"
                                      }, React.createElement("div", {
                                            className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                                          }, React.createElement("input", {
                                                className: "mdl-textfield__input",
                                                name: "event",
                                                type: "text",
                                                value: $$event
                                              }), React.createElement("label", {
                                                className: "mdl-textfield__label",
                                                htmlFor: "event"
                                              }, "Event Name")), React.createElement("div", undefined, React.createElement("button", {
                                                className: "mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
                                                type: "submit"
                                              }, "Save")))
                                ])));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

function render(config) {
  return Server.renderToString(ReasonReact.element(undefined, undefined, make(config.event, /* array */[])));
}

exports.component = component;
exports.make = make;
exports.render = render;
/* component Not a pure module */
