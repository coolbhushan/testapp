function fnFormatDetails ( oTable, nTr )
{
	
	//please keep this row on the top of function this the array value of bale column records 
	
var aData = oTable.fnGetData( nTr );
//varible for sending means users uniqe email id 
var email_id=aData[2];

var datas ='';
var data1="emailId="+email_id;
		$.ajax({
		url: "/showUserJson", type: "post", data: data1,async: false, cache: false,
		success: function (html)
			{
				var datass =html;
				datas =datas+datass;
			}
		});
	var data11= datas.split("_");
	var application=data11[0];
	var Groups=data11[1];
	var userId=data11[2];
	 
	var sOut = '<form action="" method=""><table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px; width:100%;">';
	sOut += '<tr>';
	sOut += '<td> <div class="task-header red_task" style="padding:0px !important;">User Details  of : '+aData[1]+'  </div></td>';
	sOut += '<td align="right" style="float:right"><a href="#" class="add_user" data-toggle="modal" data-target="#"><button class="btn btn-primary" onClick="saveDetails('+userId+')" name=userId  type="button"> Save Details  </button> </a> &nbsp; <a href="#" class="add_user" data-toggle="modal" data-target="#myModal2" ><button class="btn btn-primary" onClick="changeEmail('+userId+')" type="button" >Change Email  </button></a>  &nbsp; <a href="#" class="add_user" data-toggle="modal" data-target="#myModal3"> <button class="btn btn-primary" onClick="changePassword('+userId+')" type="button"  >Change Password </button></a></td>';
	sOut += '</tr>';
	sOut += '<td colspan="2"><b> Apps </b>';
	sOut += application;
	sOut += '</td></tr>';
	sOut += '<tr><td colspan="2"> <b>Groups</b>';
	sOut += Groups;
	sOut += '</td></tr>';
	sOut += '</tr></table></form>';
	
	 return sOut;
}

$(document).ready(function() {

    $('#dynamic-table').dataTable( {
        "aaSorting": [[ 4, "desc" ]]
    } );
    /*
     * Insert a 'details' column to the table
     */
    var nCloneTh = document.createElement( 'th' );
    var nCloneTd = document.createElement( 'td' );
    nCloneTd.innerHTML = '<img src="/assets/plugins/advanced-datatable/images/details_open.png">';
    nCloneTd.className = "center";

    $('#hidden-table-info thead tr').each( function () {
        this.insertBefore( nCloneTh, this.childNodes[0] );
    } );

    $('#hidden-table-info tbody tr').each( function () {
        this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
    } );

    /*
     * Initialse DataTables, with no sorting on the 'details' column
     */
    var oTable = $('#hidden-table-info').dataTable( {
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [ 0 ] }
        ],
        "aaSorting": [[1, 'asc']]
    });

    /* Add event listener for opening and closing details
     * Note that the indicator for showing which row is open is not controlled by DataTables,
     * rather it is done here
     */
    $('#hidden-table-info tbody td img').click(function () {
        var nTr = $(this).parents('tr')[0];
        if ( oTable.fnIsOpen(nTr) )
        {
            /* This row is already open - close it */
            this.src = "/assets/plugins/advanced-datatable/images/details_open.png";
            oTable.fnClose( nTr );
        }
        else
        {
            /* Open this row */
            this.src ="/assets/plugins/advanced-datatable/images/details_close.png";
            oTable.fnOpen( nTr, fnFormatDetails(oTable, nTr), 'details' );
        }
    } );
} );