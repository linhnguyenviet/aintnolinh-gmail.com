import React, { Component } from "react";
import "./style.scss";
import Button from "../../../../components/common/button";
import icons from "../../../../constants/icons";
import Input from "../../../../components/common/input";
import { connect } from "react-redux";
import {
    getAllTypeStagesDefine,
    postProductionStage,
    getAllStagesProduction
} from "../../../../actions/sprints";
import { getAllProductCommonType } from "../../../../actions/product";

const buttons = {
    save: false,
    add: false,
    edit: false,
    sync_step: false
};

class DeclareStagesFinishedSprint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...buttons,
            newLine: [],
            warning: false,
            temp_key_menu: 12,
            list_checked: [], //List vị trí được select bên trái
            temp_sync_steps: [], //List các công đoạn được chọn để thêm công đoạn đồng thời
            list_sync_step: [],
            listAdd: [],
            listAllSteps: [], //List tất cả công đoạn ở bên trái
            list_checked_sync: [], //List vị trí được chọn để gộp thành công đoạn đồng thời
            moving_steps: -1,
            isActive: 0,
            notiMessage: "",
            successNoti: true,
            buttonActive: {
                save: false,
                add: false
            }

        };
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleClickPartMenu = this.handleClickPartMenu.bind(this);
        this.handleChangeChecked = this.handleChangeChecked.bind(this);
        this.handleEditInput = this.handleEditInput.bind(this);
        this.handleAddStep = this.handleAddStep.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSyncStep = this.handleSyncStep.bind(this);
        this.handleSelectSyncStep = this.handleSelectSyncStep.bind(this);
        this.handleSaveChange = this.handleSaveChange.bind(this);
        this.postStage = this.postStage.bind(this);
        this.showWarningNoti = this.showWarningNoti.bind(this);
        this.hideWarningNoti = this.hideWarningNoti.bind(this);
        this.handleSelectToMove = this.handleSelectToMove.bind(this);
        this.handleMovingStep = this.handleMovingStep.bind(this);
        this.setActive = this.setActive.bind(this)
        this.showNotiMessage = this.showNotiMessage.bind(this)
        this.handleMouse = this.handleMouse.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        const { dataStages } = this.props;
        if (nextProps.dataStages !== dataStages) {
            this.setState({
                newLine: [
                    <tr key={nextProps.dataStages.length}>
                        <td>{nextProps.dataStages.length + 1}</td>
                        <td>
                            <Input typeInput="checkbox" />
                            <Input
                                typeInput="text"
                                placeholderInput="Input text"
                                onKeyDownInput={this.postStage}
                                autoFocus
                            />
                        </td >
                    </tr >
                ]
            })
        }
        this.setState({
            listAllSteps: nextProps.dataStages
        })
    }
    componentDidMount() {
        const { id_constructions } = this.props;
        this.props.getAllProductCommonType({ id_constructions: id_constructions });
        this.props.getAllTypeStagesDefine();
        setTimeout(() => { this.setState({ successNoti: false }) }, 3000);

    }
    handleClickButton(event, key) {
        event.stopPropagation();
        this.setState(
            prevState => {
                return {
                    ...buttons,
                    [key]: !prevState[key]
                }
            }
        );
    }

    showWarningNoti() {
        this.setState({
            warning: true
        });
        this.setState({
            notiMessage: ""
        })
    }
    hideWarningNoti() {
        this.setState({
            warning: false
        });
    }
    showNotiMessage(text) {
        this.setState({
            notiMessage: text
        })
    }
    //Chọn menu
    handleClickPartMenu(e) {
        const { id_constructions } = this.props;
        var index = e.target.getAttribute("key-index");
        this.setState({
            temp_key_menu: Number(index)
        });
        this.setActive(index)
        this.props.getAllStagesProduction({
            id_constructions: id_constructions,
            id_pd_product_common_type: Number(index)
        });
    }
    //Chọn các công đoạn
    handleChangeChecked(e) {
        const id_item = e.target.name;
        const isChecked = e.target.checked;
        if (isChecked === true) {
            this.state.list_checked.push(id_item);
        } else {
            this.setState(prevState => {
                return {
                    list_checked: prevState.list_checked.filter(val => val !== id_item)
                };
            });
        }
    }

    //Chỉnh sửa công đoạn
    handleEditInput(e) {
        var listChange = [...this.state.listAllSteps];
        listChange[e.target.name].name = e.target.value;
        this.setState({
            list_step: listChange
        });
        this.showWarningNoti();
    }
    //Thêm công đoạn
    handleAddStep() {
        var newLine = [...this.state.newLine];
        const { dataStages } = this.props;
        newLine.push(
            <tr key={dataStages.length + newLine.length + 1}>
                <td>{dataStages.length + newLine.length + 1}</td>
                <td>
                    <Input
                        typeInput="checkbox"
                    />
                    <Input
                        typeInput="text"
                        placeholderInput="Input text"
                        onKeyDownInput={this.postStage}
                    />
                </td>
            </tr>);
        this.setState({
            newLine
        });
        this.showWarningNoti();
    }
    async postStage(event) {
        if (
            event.keyCode === 13 ||
            event.key === "Enter" ||
            event.key === "Return"
        ) {
            const name_stage = event.target.value;
            var listPost = [...this.state.listAllSteps];
            var dataPost = [];
            listPost.forEach((val, ind) => {
                if (!val.item) {
                    dataPost.push({ index_number: val.index_number, name: val.name });
                } else {
                    dataPost.push({
                        index_number: val.index_number,
                        item: val.item.map((item) => {
                            return { index_number: item.index_number };
                        })
                    });
                }
            });
            dataPost.push({
                index_number: listPost.length + 1,
                name: name_stage
            })
            await this.props.postProductionStage({
                id_pd_product_common_type: this.state.temp_key_menu,
                id_constructions: this.props.id_constructions,
                item: dataPost
            });
        }
    }
    //Xóa công đoạn đã chọn
    handleDelete() {
        var listDelete = [...this.state.listAllSteps];
        var indexDelete = [...this.state.list_checked];
        if (indexDelete.length > 0) {
            for (let i = 0; i < indexDelete.length; i++) {
                listDelete = listDelete.filter(
                    val => val.index_number !== Number(indexDelete[i])
                );
            }
            listDelete.forEach((data, index) => (data.index_number = index + 1));
            this.setState({
                listAllSteps: listDelete,
                list_checked: []
            });
        }
        this.showWarningNoti();
    }
    //Lưu các thay đổi
    handleSaveChange() {
        var listPost = [...this.state.listAllSteps];
        var dataPost = [];
        listPost.forEach((val, ind) => {
            if (!val.item) {
                dataPost.push({ index_number: val.index_number, name: val.name });
            } else {
                dataPost.push({
                    index_number: val.index_number,
                    item: val.item.map((item) => {
                        return { index_number: item.index_number };
                    })
                });
            }
        });
        this.props.postProductionStage({
            id_pd_product_common_type: this.state.temp_key_menu,
            id_constructions: this.props.id_constructions,
            item: dataPost
        });
        this.setState({
            ...buttons,
            warning: false
        })
    }
    //Chọn các công đoạn đồng thời
    handleSelectSyncStep(e) {
        var name_stage = e.target.innerHTML;
        var index_stage = name_stage.split(".")[0];
        index_stage = index_stage.replace("<span>", "");
        name_stage = name_stage.split(".")[1];
        name_stage = name_stage.replace("<span>", "");
        name_stage = name_stage.replace("</span>", "");
        const temp_sync_steps = [...this.state.temp_sync_steps];
        var checked = false;
        if (temp_sync_steps.length === 0) {
            temp_sync_steps.push({
                index_number: index_stage,
                name: name_stage
            })
            this.setState({ temp_sync_steps })
        } else {
            temp_sync_steps.map((data, index) => {
                if (data.name === name_stage) {
                    checked = true;
                    alert("Công đoạn này đã được chọn");
                } else {
                    if (index === temp_sync_steps.length - 1 && checked === false) {
                        temp_sync_steps.push({
                            index_number: index_stage,
                            name: name_stage
                        })
                        this.setState({ temp_sync_steps })
                    }
                }
            })
        }

    }
    //Chọn công đoạn để di chuyển
    handleSelectToMove(e) {
        const index_number = e.currentTarget.dataset.id;
        this.setState({
            moving_steps: index_number
        })
    }
    //Di chuyển công đoạn
    handleMovingStep(act) {
        console.log(this.state.temp_sync_steps);
        var arr = [...this.state.temp_sync_steps];
        var fromIndex = this.state.moving_steps;
        var newIndex = 0;
        var toIndex = 0;
        switch (act) {
            case "up":
                fromIndex > 0 ? (toIndex = fromIndex - 1) : (toIndex = fromIndex);
                break;
            default:
                fromIndex < arr.length - 1
                    ? (toIndex = fromIndex + 1)
                    : (toIndex = fromIndex);
                break;
        }
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
        newIndex = toIndex;
        this.setState({
            temp_sync_steps: arr,
            moving_steps: newIndex
        });
    }
    //Gộp các công đoạn đồng thời
    handleSyncStep() {
        var listNewSteps = [...this.state.listAllSteps];
        var listStepsToSync = [...this.state.temp_sync_steps];
        if (listStepsToSync.length > 0) {
            var syncStep = [];
            listStepsToSync.forEach((val, ind) => {
                syncStep.push({ index_number: val.index_number, name: val.name });
            });
            listNewSteps.push({
                index_number: listNewSteps.length + 1,
                item: syncStep
            });
            this.setState({
                listAllSteps: listNewSteps,
                temp_sync_steps: [],
                list_checked_sync: []
            });
        }
    }
    //Xóa công đoạn đã chọn
    handleClickLeft() {
        const { moving_steps } = this.state;
        console.log(moving_steps);

        this.setState(prevState => ({
            temp_sync_steps: prevState.temp_sync_steps.filter(
                (data, ind) => {
                    return Number(ind) !== Number(moving_steps)
                }
            )
        }))
        this.setState({
            moving_steps: -1
        })
    }
    setActive = (key) => {
        this.setState({
            isActive: key
        })
    }
    handleMouse = (event, key) => {
        if (event.type === "mousedown") {
            this.setState({ buttonActive: { [key]: true } });
        } else {
            this.setState({ buttonActive: { [key]: false } });
        }
    }
    render() {
        const allListMenu = [...this.props.listAllTypeStage];
        var list_step_declare = [...this.state.listAllSteps];
        var { newLine } = this.state;
        var list_step_display = [];
        var list_step_sync = [];
        var declare_step_sync = [];
        var leftMenu = [];
        var isActive = Number(this.state.isActive)

        allListMenu.forEach((val, ind) => {
            var subMenu = [];
            if (val.item_components && val.item_components.length > 0) {
                val.item_components.forEach((item, index) => {
                    return subMenu.push(
                        <li onClick={e => this.handleClickPartMenu(e)} className={isActive === item.id ? "active" : ""}>
                            <span key-index={item.id}>{item.name}</span>
                        </li>
                    );
                });
            }
            if (subMenu.length > 0) {
                leftMenu.push(
                    <li onClick={e => this.handleClickPartMenu(e)} className={isActive === val.id ? "active" : ""}>
                        <span key-index={val.id}>{val.name}</span>
                        <ul className="sub-menu">{subMenu}</ul>
                    </li>
                );
            } else {
                leftMenu.push(
                    <li onClick={e => this.handleClickPartMenu(e)} className={isActive === val.id ? "active" : ""}>
                        <span key-index={val.id}>{val.name}</span>
                    </li>
                );
            }
        });

        //Render list công đoạn đồng thời
        if (this.state.temp_sync_steps.length > 0) {
            var tempSyncs = [...this.state.temp_sync_steps];
            if (tempSyncs.length > 0) {
                for (let i = 0; i < tempSyncs.length; i++) {
                    list_step_sync.push(
                        <li
                            onClick={this.handleSelectToMove}
                            data-id={i}
                            name={tempSyncs[i].name}
                            className={
                                Number(this.state.moving_steps) === Number(i)
                                    ? "active"
                                    : ""
                            }
                        >
                            <span>{tempSyncs[i].index_number}.{tempSyncs[i].name}</span>
                        </li>
                    );
                }
            }

        }

        //Render list các công đoạn từ database
        if (list_step_declare.length > 0) {
            list_step_declare.forEach((val, ind) => {
                //Xử lí những items có công đoạn đồng thời
                if (val.item) {
                    var subItems = [...val.item];
                    var syncSteps = "Công đoạn đồng thời: ";
                    subItems.forEach((subVal, ind) => {
                        return (syncSteps =
                            syncSteps + subVal.index_number + ". " + subVal.name + " ");
                    });
                }
                list_step_display.push(
                    <tr>
                        <td>
                            <span>
                                {val.index_number}
                            </span>
                        </td>
                        <td>
                            {this.state.edit ? (
                                <>
                                    <Input
                                        typeInput="checkbox"
                                        nameInput={val.index_number}
                                        onchangeInput={this.handleChangeChecked}
                                    />
                                    <Input
                                        typeInput="text"
                                        placeholderInput="Input text"
                                        nameInput={ind}
                                        valueInput={val.item ? syncSteps : val.name}
                                        onchangeInput={this.handleEditInput}
                                    />
                                </>
                            ) : (
                                    <span>
                                        <Input
                                            typeInput="checkbox"
                                            nameInput={val.index_number}
                                            onchangeInput={this.handleChangeChecked}
                                        />
                                        {val.item ? syncSteps : val.name}
                                    </span>
                                )}
                        </td>
                    </tr>
                );
                declare_step_sync.push(
                    <li
                        onClick={this.handleSelectSyncStep}
                    >
                        <span>{val.index_number}.{val.item ? syncSteps : val.name}</span>
                    </li>
                );
            });
        }
        return (
            <>
                <div className="setup-button">

                    {
                        this.state.warning ? <p>Bạn có thay đổi nhưng chưa lưu</p> : null
                    }
                    {
                        this.props.success ?
                            this.state.successNoti ?
                                <p className="notification">{this.props.success}</p>
                                : null :
                            this.props.error ?
                                this.props.messages ?
                                    <p className="notification">{this.props.error.messages.message}</p> :
                                    <p className="notification">Không thể kết nối đến server</p>
                                : null
                    }

                    <Button
                        titleButton="Save"
                        onClickButton={this.handleSaveChange}
                        onMouseDownButton={event => this.handleMouse(event, 'save')}
                        onMouseUpButton={event => this.handleMouse(event, 'save')}
                        classNameButton={this.state.buttonActive.save ? "active" : ""}
                    />
                    <Button
                        titleButton="Thêm"
                        onClickButton={this.handleAddStep}
                        onMouseDownButton={event => this.handleMouse(event, 'add')}
                        onMouseUpButton={event => this.handleMouse(event, 'add')}
                        classNameButton={this.state.buttonActive.add ? "active" : ""}
                    />
                    <Button
                        titleButton="Thêm Công Đoạn Đồng Thời"
                        onClickButton={e => this.handleClickButton(e, "sync_step")}
                        classNameButton={this.state.sync_step ? "active" : ""}
                    />
                    <Button
                        titleButton="Sửa"
                        onClickButton={e => this.handleClickButton(e, "edit")}
                        classNameButton={this.state.edit ? "active" : ""}
                    />
                    <Button titleButton="Xóa" onClickButton={this.handleDelete} />
                </div>
                <div className="content">
                    <div className="left-menu-content">
                        <ul>
                            <li className="list-header">
                                <span>Bộ phận</span>
                            </li>
                            {leftMenu}
                        </ul>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>ID Công Đoạn</td>
                                <td>List Công Đoạn Gia Công</td>
                            </tr>
                        </thead>
                        <tbody>{list_step_display}{newLine}</tbody>
                    </table>
                    {this.state.sync_step ? (
                        <div className="list-stages">
                            <div className="title">
                                <span>List công đoạn</span>
                            </div>
                            <div className="list-content">
                                <ul className="list-steps">{declare_step_sync}</ul>
                                <div className="grp-btns grp-1">
                                    <Button
                                        iconButton={icons.icon_shift_right}
                                        onClickButton={() => this.handleAddSyncStep()}
                                    />
                                    <Button
                                        iconButton={icons.icon_shift_left}
                                        onClickButton={() => this.handleClickLeft()}
                                    />
                                </div>
                                <div className="right-content">
                                    <div className="list-select">
                                        <ul>{list_step_sync}</ul>
                                        <div className="grp-btns grp-2">
                                            <Button titleButton="Chọn toàn bộ" />
                                            <Button titleButton="Bỏ chọn toàn tất cả" />
                                            <Button titleButton="Thay thế" />
                                            <Button
                                                iconButton={icons.icon_arrow_up}
                                                onClickButton={() => this.handleMovingStep("up")}
                                            />
                                            <Button
                                                iconButton={icons.icon_arrow_down}
                                                onClickButton={() => this.handleMovingStep("down")}
                                            />
                                        </div>
                                    </div>
                                    <div className="footer-button">
                                        <Button
                                            titleButton="Okay"
                                            onClickButton={() => this.handleSyncStep()}
                                        />
                                        <Button
                                            titleButton="Clear"
                                            onClickButton={() =>
                                                this.setState({ temp_sync_steps: [] })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <Button titleButton="Close" onClickButton={e => this.handleClickButton(e, "sync_step")} />
                            </div>
                        </div>
                    ) : null}
                </div>
            </>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    getAllTypeStagesDefine: data => dispatch(getAllTypeStagesDefine(data)),
    getAllProductCommonType: data => dispatch(getAllProductCommonType(data)),
    postProductionStage: data => dispatch(postProductionStage(data)),
    getAllStagesProduction: data => dispatch(getAllStagesProduction(data))
});
const mapStateToProps = state => ({
    isLoading: state.sprintsReducer.isLoading,
    error: state.sprintsReducer.error,
    listAllTypeStage: state.sprintsReducer.listAllTypeStage,
    dataStages: state.sprintsReducer.dataStages,
    listAllProductCommonType: state.productReducer.listAllProductCommonType,
    postError: state.sprintsReducer.postError,
    postSuccess: state.sprintsReducer.postSuccess,
    success: state.sprintsReducer.success
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeclareStagesFinishedSprint);

