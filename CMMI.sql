use CMMI 

GO
if not exists (select * from sysobjects where name='Project_Master' and xtype='U')
CREATE TABLE [dbo].[Project_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[project_name] [nvarchar](200) not NULL
	)

GO


if not exists (select * from sysobjects where name='Owner_Master' and xtype='U')
CREATE TABLE [dbo].[Owner_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[owner_name] [nvarchar](200) not NULL
	)

GO


if not exists (select * from sysobjects where name='Risk_Type_Master' and xtype='U')
CREATE TABLE [dbo].[Risk_Type_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL  primary key,
	[risk_type_name] [nvarchar](200) not NULL
)

GO

if not exists (select * from sysobjects where name='Risk_Register' and xtype='U')
CREATE TABLE [dbo].[Risk_Register](
	[id] [bigint] IDENTITY(1,1) NOT NULL  primary key,
	[project_id] [bigint] NOT NULL ,
	[open_date] [date] NOT NULL ,
	[closed_date] [date] NOT NULL ,
	[risk_id] [nvarchar](100) NOT NULL ,
	[risk_type_id] [bigint] NOT NULL ,
	[impact_project] [nvarchar](500) NOT NULL ,
	[mitagation_action] [nvarchar](500) NOT NULL ,
	[risk_probability] [int] NOT NULL ,
	[severity] [int] NOT NULL ,
	[risk_value] [int] NULL ,
	[owner_id] [bigint] NOT NULL ,
	FOREIGN KEY (project_id) REFERENCES Project_Master(id),
	FOREIGN KEY (owner_id) REFERENCES Owner_Master(id),
	FOREIGN KEY (risk_type_id) REFERENCES Risk_Type_Master(id),
 )

GO

if not exists (select * from sysobjects where name='Status_Master' and xtype='U')
CREATE TABLE [dbo].[Status_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL  primary key,
	[status_name] [nvarchar](200) not NULL,
	[category] [nvarchar](100) not null
)

GO

if not exists (select * from sysobjects where name='Incident_Register' and xtype='U')
CREATE TABLE [dbo].[Incident_Register](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[project_id] [bigint] NOT NULL ,
	[date] [date] NOT NULL ,
	[time] [datetime] NOT NULL ,
	[incident_name] [nvarchar](100) NOT NULL ,
	[description] [nvarchar](500) NULL ,
	[action_taken] [nvarchar](100) NOT NULL ,
	[resolution_date] [date] NOT NULL ,
	[status_id] [bigint] NOT NULL,
	FOREIGN KEY (project_id) REFERENCES Project_Master(id),
	FOREIGN KEY (status_id) REFERENCES Status_Master(id),
	)

GO


if not exists (select * from sysobjects where name='Category_Master' and xtype='U')
CREATE TABLE [dbo].[Category_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[category_name] [nvarchar](200) not NULL
 )

GO

if not exists (select * from sysobjects where name='Lesson_Type_Master' and xtype='U')
CREATE TABLE [dbo].[Lesson_Type_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[lesson_type_name] [nvarchar](200) not NULL
 )

GO


if not exists (select * from sysobjects where name='Sprint_Master' and xtype='U')
CREATE TABLE [dbo].[Sprint_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[sprint_name] [nvarchar](200) not NULL,
	[sprint_start_date] [datetime] not NULL,
	[sprint_end_date] [datetime] not NULL
)

GO

if not exists (select * from sysobjects where name='Lesson_Learned' and xtype='U')
CREATE TABLE [dbo].[Lesson_Learned](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[project_id] [bigint] NOT NULL,
	[sprint_id] [bigint] NOT NULL,
	[date] [datetime] not NULL,
	[category_id] [bigint] NOT NULL,
	[lesson_type_id] [bigint] NOT NULL,
	[happened] [nvarchar](500) NOT NULL,
	[impact] [nvarchar](500) NOT NULL,
	[recommendation] [nvarchar](500) NOT NULL,
	[action_items] [nvarchar](500) NOT NULL,
	[owner_id] [bigint] NULL,
	[status_id] [bigint] NOT NULL ,
	FOREIGN KEY (project_id) REFERENCES Project_Master(id),
	FOREIGN KEY (sprint_id) REFERENCES Sprint_Master(id),
	FOREIGN KEY (category_id) REFERENCES Category_Master(id),
	FOREIGN KEY (lesson_type_id) REFERENCES Lesson_Type_Master(id),
	FOREIGN KEY (owner_id) REFERENCES Owner_Master(id),
	FOREIGN KEY (status_id) REFERENCES Status_Master(id),
 )

GO


if not exists (select * from sysobjects where name='Process_Type_Master' and xtype='U')
CREATE TABLE [dbo].[Process_Type_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[lesson_type_name] [nvarchar](200) not NULL
)

GO


if not exists (select * from sysobjects where name='Tailoring_Register' and xtype='U')
CREATE TABLE [dbo].[Tailoring_Register](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[project_id] [bigint] NOT NULL,
	[date] [datetime] not NULL,
	[process_name] [nvarchar](500) NOT NULL,
	[process_type_id] [bigint] NOT NULL,
	[is_service] [bit] not NULL,
	[is_development] [bit] not NULL,
	[changed] [nvarchar](500) NOT NULL,
	FOREIGN KEY (project_id) REFERENCES Project_Master(id),
	FOREIGN KEY (process_type_id) REFERENCES Process_Type_Master(id),
	)
GO



CREATE TABLE [dbo].[DSM_Register](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[project_id] [int],
	[sprint_id] [int],
	[date] datetime,
	[is_absesnt] bit,
	[start_time] datetime,
	[end_time] datetime,
	[user_id] int,
	[do_yesterday] nvarchar(2000),
	[do_today] nvarchar(2000),
	[discussion] nvarchar(2000),
	[burn_down_chart_review] nvarchar(2000),
	[qa_review] nvarchar(2000),
	[points] nvarchar(2000)
)

go

CREATE TABLE [dbo].[DSM_Kick_Out](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[dsm_id] [int],
	[issue_number] nvarchar(100),
	[issue] nvarchar(2000),
	[action_by] int
)

go

CREATE TABLE [dbo].[Retrospective_Register](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[project_id] [int],
	[sprint_id] [int],
	[date] datetime,
	[leave_info] nvarchar(2000),
	[well] nvarchar(2000),
	[not_well] nvarchar(2000),
	[start_doing] nvarchar(2000),
	[keep_doing] nvarchar(2000),
	[lessions_learned] nvarchar(2000),
	[action_items] nvarchar(2000),
	[incident_log] nvarchar(2000),
	[risk_register] nvarchar(2000),
)

GO
if not exists (select * from sysobjects where name='Evaluation_Criteria_Master' and xtype='U')
CREATE TABLE [dbo].[Evaluation_Criteria_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[evaluation_group_name] [nvarchar](200) not NULL
	)

	GO

	if not exists (select * from sysobjects where name='Evaluation_Criteria_Detail' and xtype='U')
CREATE TABLE [dbo].[Evaluation_Criteria_Detail](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[master_Id][bigint] not NULL,
	[evaluation_name] [nvarchar](200) not NULL,
	[evaluation_weights] [int] not NULL,
	FOREIGN KEY (master_Id) REFERENCES Evaluation_Criteria_Master(id),
	)

	GO

	if not exists (select * from sysobjects where name='DAR_Master' and xtype='U')
CREATE TABLE [dbo].[DAR_Master](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[project_name] [nvarchar](200) not NULL,
	[facilitator] [nvarchar](200) not NULL,
	[participants] [nvarchar](500) not NULL,
	[brainstorming] [bit] not NULL,
	[nominal_group_technique] [bit] not NULL,
	[interview] [bit] not NULL,
	[pareto_analysis] [bit] not NULL,
	[date] [date] not NULL,
	)

GO

	if not exists (select * from sysobjects where name='DAR_Step_One' and xtype='U')
CREATE TABLE [dbo].[DAR_Step_One](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[master_Id][bigint] not NULL,
	[short_statement] [nvarchar](500) not NULL,
	[detail_statement] [nvarchar](500) not NULL,
	FOREIGN KEY (master_Id) REFERENCES DAR_Master(id),
	)

GO

	if not exists (select * from sysobjects where name='DAR_Step_Two' and xtype='U')
CREATE TABLE [dbo].[DAR_Step_Two](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[master_Id][bigint] not NULL,
	[text_field] [nvarchar](200) not NULL,
	[evaluation_criteria_id][int] not NULL,
	[evaluation_criteria_weight][int] not NULL,
	FOREIGN KEY (master_Id) REFERENCES DAR_Master(id),
	)

	GO

	if not exists (select * from sysobjects where name='DAR_Step_Three' and xtype='U')
CREATE TABLE [dbo].[DAR_Step_Three](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[master_Id][bigint] not NULL,
	[text_field] [nvarchar](200) not NULL,
	[total_weight][int] not NULL,
	[risk_analysis_need][nvarchar](200) not NULL,
	[risk_description][nvarchar](200) not NULL,
	[impact][nvarchar](200) not NULL,
	[probability][int] not NULL,
	[risk_factor][int] not NULL,
	[proposed_selection][nvarchar](200) not NULL,
	[ratified][nvarchar](200) not NULL,
	[comments][nvarchar](200) not NULL,
	FOREIGN KEY (master_Id) REFERENCES DAR_Master(id),
	)
	GO

	if not exists (select * from sysobjects where name='DAR_Result' and xtype='U')
CREATE TABLE [dbo].[DAR_Result](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[master_Id][bigint] not NULL,
	[result] [nvarchar](500) not NULL,
	FOREIGN KEY (master_Id) REFERENCES DAR_Master(id),
	)

	GO
	if not exists (select * from sysobjects where name='Project_Sprint' and xtype='U')
CREATE TABLE [dbo].[Project_Sprint](
	[id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[project_Id][bigint] not NULL,
	[name] [nvarchar](200) not NULL,
	[start_date] [date] NOT NULL ,
	[end_date] [date] NOT NULL ,
	FOREIGN KEY (project_Id) REFERENCES Project_Master(id),
	)




