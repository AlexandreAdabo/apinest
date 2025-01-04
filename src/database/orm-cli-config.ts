import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import { CreateCoursesTable1734990706000 } from 'src/migrations/1734990706000-CreateCoursesTable'
import { CreateTagsTable1734991730267 } from 'src/migrations/1734991730267-CreateTagsTable'
import { CreateCourseTagsTable1734992684077 } from 'src/migrations/1734992684077-CreateCourseTagsTable'
import { CreateCourseIdToCoursesTagsTable1734993083521 } from 'src/migrations/1734993083521-CreateCourseIdToCoursesTagsTable'
import { CreateTagsIdToCoursesTagsTable1734993637773 } from 'src/migrations/1734993637773-CreateTagsIdToCoursesTagsTable'
import { Course } from 'src/courses/entities/courses.entity'
import { Tag } from 'src/courses/entities/tags.entity'

export const dataSourceOptions: DataSourceOptions = {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Course,Tag],
        synchronize: false,
        }

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1734990706000,
                CreateTagsTable1734991730267,
                CreateCourseTagsTable1734992684077,
                CreateCourseIdToCoursesTagsTable1734993083521,
                CreateTagsIdToCoursesTagsTable1734993637773
        ]
})