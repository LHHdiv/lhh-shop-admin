const Tools = {
  // 文件导出
  exportJSON(name, data) {
    // 创建blob对象
    let blob = new Blob([data]);
    let link = document.createElement("a");
    // 创建一个URL对象并传给a元素的href
    link.href = URL.createObjectURL(blob);
    // 设置下载的默认文件名
    link.download = name;
    link.click();
  },
};

export default Tools;
