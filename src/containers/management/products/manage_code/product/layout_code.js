import React, { Component } from "react";
import Button from "../../../../../components/common/button";
import icons from "../../../../../constants/icons";
import Select from "../../../../../components/common/select";
import Input from "../../../../../components/common/input";
import { getProductCodeLayout, getBarcodeProduct } from "../../../../../actions/manage_code";
import { connect } from "react-redux";
import Barcode from 'react-barcode'
import Moment from 'react-moment';


class LayoutCode extends Component {
    componentDidMount() {
        const { id_constructions } = this.props;
        this.props.getProductCodeLayout({ id_constructions: id_constructions })
        this.props.getBarcodeProduct({ id_constructions: id_constructions })
    }
    render() {
        var listBarcodePart = []
        const listLayout = [...this.props.listLayout]
        const typeLayout = this.props.typeLayout
        const id_part = this.props.id_part
        const rowdata = [];
        const listCode = [];
        var listBarcode = [];

        if (this.props.listBarcodePart) {
            listBarcodePart = [...this.props.listBarcodePart]
        }
        if (listBarcodePart.length > 0) {
            listBarcode = [...listBarcodePart]
        } else {
            listBarcode = this.props.listBarcodeProduct
        }
        if (listLayout && listLayout.length > 0) {
            listLayout.map((data, index) => {
                const row = [];
                var listProductArea = []
                if (typeLayout === "product") {
                    listProductArea = [...data.area.product];
                } else if (typeLayout === "part") {
                    listProductArea = [...data.area.components]
                }
                row.push(
                    <tr>
                        <td rowSpan={listProductArea.length}>{data.steel_part_name}</td>
                        <td><span>{data.area.name}</span></td>
                        <td><Input typeInput="checkbox" /></td>
                        <td>{listProductArea[0].name}</td>
                        <td>{listProductArea[0].barcode}</td>
                        <td><Moment format="HH:mm:ss DD/MM/YYYY ZZ" date={listProductArea[0].update_at} /></td>
                    </tr>
                )
                var typeCode = []
                console.log(listBarcode)
                if (id_part) {
                    typeCode = listBarcode.filter((bar) => {
                        if (bar.pd_barcode && Object.keys(bar.pd_barcode).length > 0) {
                            return bar.pd_barcode[id_part] === listProductArea[0].id
                        }
                    }
                    )
                }
                else {
                    typeCode = listBarcode.filter((bar, ind) => {
                        if (bar.pd_barcode && Object.keys(bar.pd_barcode).length > 0) {
                            return bar.pd_barcode.id_pd_product === listProductArea[0].id
                        }
                    })
                }
                listCode.push(
                    <div className="code-label">
                        <div className="title-of-code">
                            <Barcode
                                value={listProductArea[0].barcode}
                                height={40}
                                format="CODE128"
                                width={1}
                                displayValue={true}
                            />
                        </div>
                        <div className="info-of-code">
                            <p>Khu lắp dựng: {data.area.name} </p>
                            <p>Bộ phận thép: {data.steel_part_name}</p>
                            <p>Thời gian xuất code: <br /><Moment format="HH:mm:ss DD/MM/YYYY ZZ" date={listProductArea[0].update_at} /></p>
                        </div>
                    </div>
                )

                for (let i = 1; i < listProductArea.length; i++) {
                    row.push(
                        <tr>
                            <td><span>{data.area.name}</span></td>
                            <td><Input typeInput="checkbox" /></td>
                            <td>{listProductArea[i].name}</td>
                            <td>{listProductArea[i].barcode}</td>
                            <td><Moment format="HH:mm:ss DD/MM/YYYY ZZ" date={listProductArea[i].update_at} /></td>
                        </tr>
                    )
                    typeCode = listBarcode.filter((bar) => {
                        if (bar.pd_barcode && Object.keys(bar.pd_barcode).length > 0) {
                            return bar.pd_barcode[id_part] === listProductArea[i].id
                        }
                    })

                    listCode.push(
                        <div className="code-label">
                            <div className="title-of-code">
                                <Barcode
                                    value={listProductArea[i].barcode}
                                    height={40}
                                    format="CODE128"
                                    width={1}
                                    displayValue={true}
                                />
                            </div>
                            <div className="info-of-code">
                                <p>Khu lắp dựng:{data.area.name} </p>
                                <p>Bộ phận thép:{data.steel_part_name}</p>
                                <p>Thời gian xuất code:<br />
                                    <Moment format="HH:mm:ss DD/MM/YYYY ZZ" date={listProductArea[i].update_at} />
                                </p>
                            </div>
                        </div>
                    )

                }
                return rowdata.push(
                    row
                )
            })
        }
        return (

            <>
                <div className="input-information-code">
                    <table>
                        <thead>
                            <tr>
                                <td><Button titleButton="Bộ phận thép" /></td>
                                <td><Button titleButton="Khu lắp dựng" /></td>
                                <td></td>
                                <td><Button titleButton="Tên sản phẩm" /></td>
                                <td><Button titleButton="Barcode" /></td>
                                <td><Button titleButton="Thời gian xuất code" /></td>
                            </tr>
                        </thead>
                        <tbody>
                            {rowdata}
                        </tbody>
                    </table>
                    <div className="table-footer">
                        <Button titleButton="Chọn toàn bộ" />
                        <Button titleButton="Xóa toàn bộ" />
                        <Button titleButton="Thay thế" />
                    </div>
                </div>
                <div className="list-detail-code">
                    <Button iconButton={icons.icon_arrow_left} />
                    <div className="list-of-code">
                        {listCode}
                    </div>
                    <Button iconButton={icons.icon_arrow_right} />
                </div>
                <div className="setup-code-layout">
                    <div className="setup-code">
                        <p className="setup-code-header">Cài đặt code</p>
                        <ul>
                            <li>
                                <span>Loại code</span>
                                <Select nameSelect="codeType" />
                            </li>
                            <li><span>Chủ đề</span><Select nameSelect="subtitle" /></li>
                            <li><span>Comment</span><Select nameSelect="comment" /></li>
                            <li><p>Hãy chọn 3 hạng mục trở xuống</p></li>
                            <li><span>Kích thước &#40;cao&#41; </span><Input typeInput="number" /><span>Trên dưới</span><Input typeInput="number" /></li>
                            <li><span>Kích thước &#40;dài&#41; </span><Input typeInput="number" /><span>Trái phải</span><Input typeInput="number" /></li>
                            <li><span>Chữ</span></li>
                            <li><span>Đường viền<Input typeInput="checkbox" /></span></li>
                        </ul>
                        <div className="output-code">
                            <div className="code-label">
                                <div className="title-of-code">
                                    <img src={icons.code_example} alt="code" />
                                    <p>1C-X8Y10</p>
                                </div>
                                <div className="info-of-code">
                                    <p>Comment 1: </p>
                                    <p>Comment 2:</p>
                                    <p>Comment 3:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="setup-layout">
                        <p className="setup-layout-header">Cài đặt layout</p>
                        <ul>
                            <li><span>Kích thước giấy in</span><select><option>A4&#40;270mmx297mm&#41;</option></select></li>
                            <li><span>Loại giấy in</span><select><option>A4&#40;270mmx297mm&#41;</option></select></li>
                            <li><span>Cách sắp xếp</span><select><option>Lorem</option></select></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getProductCodeLayout: data => dispatch(getProductCodeLayout(data)),
    getBarcodeProduct: data => dispatch(getBarcodeProduct(data))
})
const mapStateToProps = state => ({
    isLoading: state.manageCodeReducer.isLoading,
    error: state.manageCodeReducer.error,
    listProductCodeLayout: state.manageCodeReducer.listProductCodeLayout,
    listBarcodeProduct: state.manageCodeReducer.listBarcodeProduct
})
export default connect(mapStateToProps, mapDispatchToProps)(LayoutCode)