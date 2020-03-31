import { all } from "redux-saga/effects";
import { actionAuth } from "./auth";
import { actionConstruction } from "./home";
import { actionParameterConstruction } from "./parameter";
import { actionOrderConstruction } from "./order";
import { actionProductConstruction } from "./product";
import { actionManageCodeProduct } from "./manage_code";
import { actionSprints } from "./sprints";
import { actionProcess } from "./process";

export default function* rootSaga() {
  yield all([
    actionAuth(),
    actionConstruction(),
    actionParameterConstruction(),
    actionOrderConstruction(),
    actionProductConstruction(),
    actionManageCodeProduct(),
    actionSprints(),
    actionProcess()
  ]);
}
